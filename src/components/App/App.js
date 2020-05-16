import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';

//importing components to App.js
import Header from '../Header/Header';
import Home from '../Home/Home';
import DetailsView from '../DetailsView/DetailsView';
import Edit from '../Edit/Edit';

class App extends Component {

  //mounts this when component gets loaded
  // componentDidMount() {
  //   this.props.dispatch({type: 'FETCH_MOVIES'});
  //   this.props.dispatch({ type: 'FETCH_GENRES' })
  // }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
       <Header />
       {/* Routes for components, Home component is the Home page */}
       <Router>
         <Route exact path="/" component={Home}/>
          <Route path="/details" component={DetailsView}/>
          <Route path="/edit" component={Edit} />
       </Router>
      </div>
    );
  }
}

export default (App);

