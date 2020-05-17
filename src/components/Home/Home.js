import React, { Component } from 'react';
import {connect} from 'react-redux';
import HomeItem from '../HomeItem/HomeItem';

class Home extends Component {

    componentDidMount() {
        this.getMovies();
    }
    
    //getMovies displays movies list on home page
    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    render() {
        return (
            <div>
                <h1>Movies List</h1>
                {/* using map function to map through array from reduxsate and display movie details*/}
                {this.props.reduxState.movies.map((movie,index) => <HomeItem key ={index} movie={movie}/>)}
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})

export default connect(putReduxStateOnProps)(Home);