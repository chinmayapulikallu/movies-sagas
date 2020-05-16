import React, { Component } from 'react';
import {connect} from 'react-redux';
import HomeItem from '../HomeItem/HomeItem';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Movies List</h1>
                {/* <p>{JSON.stringify(this.props.reduxState.movies)}</p>  */}
                
                    {this.props.reduxState.movies.map((movie,index) => 
                    <HomeItem key ={index} movie={movie}/>)}
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})

export default connect(putReduxStateOnProps)(Home);