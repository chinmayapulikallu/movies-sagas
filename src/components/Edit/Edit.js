import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Edit extends Component {
    render() {
        return (
            <div>
                <h2>Edit</h2>
            </div>
        )
    }
}

export default withRouter(connect()(Edit));