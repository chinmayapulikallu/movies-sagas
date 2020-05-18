import React, { Component } from 'react';
import {connect} from 'react-redux';
import HomeItem from '../HomeItem/HomeItem';
import Grid from '@material-ui/core/Grid';

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
                <Grid container spacing={3}>
                {/* using map function to map through array from reduxsate and display movie details*/}
                {this.props.reduxState.movies.map((movie,index) => <HomeItem key ={index} movie={movie}/>)}
                </Grid>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})

export default connect(putReduxStateOnProps)(Home);