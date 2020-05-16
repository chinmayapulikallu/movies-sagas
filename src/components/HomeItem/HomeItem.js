import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeItem.css';
import {withRouter} from 'react-router-dom';

class HomeItem extends Component {

    // componentDidMount() {
    //     this.getMovies();
    // }

    // //getMovies displays movies list on home page
    // getMovies = () => {
    //     this.props.dispatch({type: 'FETCH_MOVIES'})
    // }

    // On clicking movie poster, posterClick function gets called
    // and moves to /details page.
    posterClick = (event, id) => {
        console.log('in posterClick', event, id);
        this.props.dispatch({type: 'FETCH_MOVIE_DETAILS', payload: id})
        // this.getGenres(event, id);
        this.props.history.push({pathname: '/details', state: id})
    }

    //To get genres from the database
    // getGenres = (event, id) => {
    //     console.log('in posterClick', event);
    //     this.props.dispatch({type: 'FETCH_GENRES', payload: id})
    // }


    render() {
        return (
            <div className="movie-page">
            <div className="movie-display left">
                <img src={this.props.movie.poster} alt={this.props.movie.title} 
                onClick={(event) => this.posterClick(event, this.props.movie.id)}/>
            </div>
                <div className="movie-display right">
                    <h1>{this.props.movie.title}</h1>
                    <p>{this.props.movie.description}</p>
                </div>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    movies: reduxState.movies })

export default withRouter(connect(putReduxStateOnProps)(HomeItem));