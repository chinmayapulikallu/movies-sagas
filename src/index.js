import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios'; 


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
    yield takeEvery('FETCH_GENRES', fetchGenres);

}

//Creating a fetchMovies generator function to get movies from database through axios
function* fetchMovies() {
    try {
        let moviesResponse = yield axios.get('/movies');
        yield put({type: 'SET_MOVIES', payload: moviesResponse.data});
    } catch(error) {
        console.log(error);
    }
}

//Creating a fetchGenres generator function to get genre of movie selected from database through axios
function* fetchGenres(action) {
    try {
        console.log("fetchGenres :: ", action.payload);
        let genresResponse = yield axios.get(`/genres?id=` + action.payload);
        yield put({ type: 'SET_GENRES', payload: genresResponse.data });
    } catch (error) {
        console.log(error);
    }
}

//Creating  generator function to get movie details of selected movie from database through axios
function* fetchMovieDetails (action) {
    console.log("fetchMovieDetails :: ", action.payload);
    try {
        let movieResponse = yield axios.get(`/details?id=` + action.payload)
        console.log('...---------------', movieResponse);
        yield put({type: 'SET_MOVIE_DETAILS', payload: movieResponse.data});
    }catch(error) {
        console.log(error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//To store details of a movie clicked
const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
