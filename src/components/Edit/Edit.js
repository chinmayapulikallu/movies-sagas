import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Edit.css';
import axios from 'axios';

class Edit extends Component {

    state ={
        id: this.props.details.id,
        title: '',
        description: ''
    }

    clickCancel = () => {
        console.log('in clickCancel');
        this.props.history.push('/details')
    }

    handleMovieChange = (event) => {
        console.log('in handleMovieChange')
        this.setState({
            title: event.target.value
        })
    }

    handleTextChange = (event) => {
        console.log('in handleTextChange')
         this.setState({
            description: event.target.value
        })
    }

    saveUpdate = () => {
        console.log('in save update', this.state)
        axios.put('/update', this.state)
          .then(response => {
              console.log(response)
              this.props.history.push({ pathname: '/details', state: this.state.id })
          }).catch(error => {
            alert(`couldn't update the database, try later`);
            console.log(error);
          })
          
    }


    render() {
        console.log('state in edit-------->', this.state)
        return (
            <div>
                <div className="edit-button">
                    <button className="cancel-button" onClick={this.clickCancel}>Cancel</button>
                    <button className="save-button" onClick={this.saveUpdate}>Save</button>
                </div>
                <div className="clear-inputs"></div>
                <div className="input-div">
                    <input type="text" placeholder="Movie Name" onChange={this.handleMovieChange} />
                    <textarea  rows="10" cols="50" onChange={this.handleTextChange} />
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
export default withRouter(connect(putReduxStateOnProps)(Edit));