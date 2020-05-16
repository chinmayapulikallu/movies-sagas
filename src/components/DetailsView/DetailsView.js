import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsView extends Component {
    render() {
        return (
            <div>
                <h2>DetailsView</h2>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState })

export default connect(putReduxStateOnProps)(DetailsView);