import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './DetailsView.css';
//material-ui
import {Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//styles using material UI
const useStyles = (theme) => ({
    margin: {
        margin: theme.spacing.unit
    }
   
});

class DetailsView extends Component {

    componentDidMount() {
        this.getMovieDetails();
        this.getGenres();
    }

    // generes of movie clicked
    getGenres = () => {
        console.log('in getGenres', this.props.match.params.id);
        const id = this.props.match.params.id
        if (id) {
            this.props.dispatch({ type: 'FETCH_GENRES', payload: id })
        }
    }

    //getMovieDetails to display movie details of the clicked movie 
    getMovieDetails = () => {
        const id = this.props.match.params.id
        if (id) {
            this.props.dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id })
        }
    }
 
   //backToList function transfers page from details to /home 
    backToList = () => {
        console.log('in back To List');
        this.props.history.push('/')
    }

    //edit function transfers moves to edit page from /details
    edit = () => {
        const id = this.props.match.params.id
        console.log('in edit page', id);
        this.props.history.push('/edit/'+id);
    }

    render() {
        //
        const {classes} =this.props;
        console.log("detail view  :: ", this)
        return (
            <div>
                <div className="details-view">
                    <Button size="large" className={classes.margin} 
                            onClick={this.backToList}>Back To List</Button>
                    <Button size="large" className={classes.margin} 
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

export default (withStyles(useStyles))(withRouter(connect(putReduxStateOnProps)(DetailsView)));