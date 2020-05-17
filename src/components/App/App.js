import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
//import {HashRouter as Router, Route, Switch } from 'react-router-dom';
//importing components to App.js
import Header from '../Header/Header';
import Home from '../Home/Home';
import DetailsView from '../DetailsView/DetailsView';
import Edit from '../Edit/Edit';
// import Child from '../Child/Child';

class App extends Component {

  
  // function Child() {
  //   let {id} = useParams();

  //   return (
  //     <div>
  //     <h3>ID: {id}</h3>
  //   </div>
  //   )
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
       {/* <Switch>
         <Route path="/:id" children = {<Child />} />
       </Switch>   */}
      </div>
    );
  }
}

export default (App);

