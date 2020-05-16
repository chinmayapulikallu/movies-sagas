import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeItem extends Component {
    render() {
        return (
            <div>
                <img src={this.props.movie.poster} alt={this.props.movie.title}/>
                <div>
                    {this.props.movie.description}
                </div>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({ reduxState })

export default connect(putReduxStateOnProps)(HomeItem);