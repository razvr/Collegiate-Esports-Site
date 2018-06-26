import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Home from './HomePage/Home';

import { schools_GetAll, games_GetAll } from './axios';


class App extends Component {

  componentDidMount() {
    games_GetAll()
    .then(
      (resp) => this.props.games(resp.data)
      // (x) => console.log(x.data)
    );

    schools_GetAll()
    .then(
      (resp) => this.props.schools(resp.data)
      // (x) => console.log(x.data)
    );
  
  };
  
  render() {
    return (
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    );
  }
}

// function mapStateToProps(state) {
//   // return {
//   //   schools: state.schools,
//   //   games: state.games
//   // }
//   return null;
// };

function mapDispatchToProps(dispatch) {
  return {
    games: (games) => dispatch({ type: 'SET_GAMES', games })
    ,schools: (schools) => dispatch({ type: 'SET_SCHOOLS', schools })
  }
  // return null;
}

export default connect(null, mapDispatchToProps)(App);

