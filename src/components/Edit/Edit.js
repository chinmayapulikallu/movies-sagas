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

    componentDidMount() {
        this.setState({
            title: this.props.details.title,
            description: this.props.details.description
        })
    }

    //navigates to details page when cancel button is clicked
    clickCancel = () => {
        console.log('in clickCancel');
        this.props.history.push('/details')
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
        return (
            <div>
                <div className="edit-button">
                    <button className="cancel-button" onClick={this.clickCancel}>Cancel</button>
                    <button className="save-button" onClick={this.saveUpdate}>Save</button>
                </div>
                <div className="clear-inputs"></div>
                <div className="input-div">
                    <input type="text"  value={this.state.title} onChange={this.handleMovieChange} />
                    <textarea  rows="10" cols="50" onChange={this.handleTextChange} value={this.state.description} />
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