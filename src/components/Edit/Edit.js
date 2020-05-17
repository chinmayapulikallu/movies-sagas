import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Edit.css';
import axios from 'axios';
//material-ui
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


//styles using material-ui
const useStyles = (theme) => ({
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
        padding: 50
    }

});


class Edit extends Component {
    
    state ={
        id: this.props.details.id,
        title: '',
        description: ''
    }

    componentDidMount() {
        this.setState({
            title: this.props.details.title,
            description: this.props.details.description
        })
    }

    //navigates to details page when cancel button is clicked
    clickCancel = () => {
        const id = this.props.details.id
        console.log('in clickCancel');
        this.props.history.push('/details/' + id)
    }

    //sets the state title when there is a new input
    handleMovieChange = (event) => {
        console.log('in handleMovieChange')
        this.setState({
            title: event.target.value
        })
    }

    //sets the state description when there is a new description update//
    handleTextChange = (event) => {
        console.log('in handleTextChange')
         this.setState({
            description: event.target.value
        })
    }

    //updates database through axios when there is a change in state
    saveUpdate = () => {
        console.log('in save update', this.state)
        const id = this.props.details.id
        axios.put('/update', this.state)
          .then(response => {
              console.log(response)
              this.props.history.push({ pathname: '/details/'+id, state: this.state.id })
          }).catch(error => {
            alert(`couldn't update the database, try later`);
            console.log(error);
          })
          
    }

    render() {
        //to get classes from props, from with styles
        const { classes } = this.props;
        return (
            <div>
                <div className="edit-button">
                    <Button size="large" color="secondary" variant="contained" className={classes.margin}
                             onClick={this.clickCancel}>Cancel</Button>
                    <Button size="large" color="primary" variant="contained" className={classes.margin} 
                            onClick={this.saveUpdate}>Save</Button>
                </div>
                <div className="clear-inputs"></div>
                <div className="input-div">
                    <TextField id="outlined-basic" variant="outlined" type="text" className={classes.textField}  value={this.state.title} onChange={this.handleMovieChange} />
                    <textarea rows="9" cols="50" type="text" onChange={this.handleTextChange} value={this.state.description} />
               
                </div>
                <div className="clear-line"></div>
                <div className="movie-details">
                    <h1>Movie:  {this.props.details.title}</h1>
                    <p>{this.props.details.description}</p>
                    <h2>Genres</h2>
                    <ul>
                        {this.props.genres.map((genre, index) =>
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
export default (withStyles(useStyles))(withRouter(connect(putReduxStateOnProps)(Edit)));