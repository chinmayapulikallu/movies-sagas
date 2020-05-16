import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeItem.css';
import {withRouter} from 'react-router-dom';

class HomeItem extends Component {

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({type: 'FETCH_MOVIES'})
    }

    // On clicking movie poster, posterClick function gets called
    // and moves to /details page.
    posterClick = () => {
        console.log('in posterClick',this);
        this.props.history.push('/details')
        

    }


    render() {
        return (
            <div className="movie-page">
            <div className="movie-display left">
                <img src={this.props.movie.poster} alt={this.props.movie.title} 
                onClick={this.posterClick}/>
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