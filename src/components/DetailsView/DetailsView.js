import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './DetailsView.css';
//material-ui
import {Button} from '@material-ui/core';


class DetailsView extends Component {

    componentDidMount() {
        this.getMovieDetails();
        this.getGenres();
    }

    // generes of movie clicked
    getGenres = () => {
        console.log('in getGenres', this.props.location.state);
        if(this.props.location.state) {
            this.props.dispatch({ type: 'FETCH_GENRES', payload: this.props.location.state })
        }
    }

    //getMovieDetails to display movie details of the clicked movie 
    getMovieDetails = () => {
        if(this.props.location.state) {
            this.props.dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: this.props.location.state })
        }
    }
 
   //backToList function transfers page from details to /home 
    backToList = () => {
        console.log('in back To List');
        this.props.history.push('/')
    }

    //edit function transfers moves to edit page from /details
    edit = (id) => {
        console.log('in edit page', id);
        this.props.history.push('/edit');
    }

    render() {
        console.log("detail view  :: ", this)
        return (
            <div>
                <div className="details-view">
                    <Button color="primary" variant="contained" className="back-button" 
                            onClick={this.backToList}>Back To List</Button>
                     <Button color="primary" variant="contained" className="edit-button" 
                             onClick={this.edit}>Edit Movie</Button>
                </div>
                <div className="clear-line"></div>
                <div className="movie-details">
                    <h1>Movie:  {this.props.details.title}</h1>
                    <p>{this.props.details.description}</p>
                         <h2>Genres</h2>
                         {/* using map to display genres on DOM */} 
                    <ul>
                        {this.props.genres.map((genre, index)=> 
                        <li key={index}>{genre.name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    details: reduxState.details,
    genres: reduxState.genres
})

export default withRouter(connect(putReduxStateOnProps)(DetailsView));