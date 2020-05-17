import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeItem.css';
import {withRouter} from 'react-router-dom';
//material-ui


class HomeItem extends Component {

    //when a movie poster is clicked calls this function
    posterClick = (event, id) => {
        this.props.history.push({pathname: '/details', state: id})
    }

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
                    {/* using map to display genres on DOM */}
                    <ul>
                        {this.props.movie.genres_names.map((genre,index)=>
                       <li key={index}>{genre}</li> 
                       )}
                        
                    </ul>
                </div>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    movies: reduxState.movies })

export default withRouter(connect(putReduxStateOnProps)(HomeItem));