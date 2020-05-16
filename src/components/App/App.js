import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

//importing components to App.js
import Header from '../Header/Header';
import Home from '../Home/Home';

class App extends Component {

  //mounts this when component gets loaded
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_MOVIES'});
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
       <Header />
       {/* Routes for components, Home component is the Home page */}
       <Router>
         <Route exact path="/" component={Home}/>
       </Router>
      </div>
    );
  }
}

export default connect()(App);

