import React from 'react';
import { Route } from "react-router";
import { Link } from "react-router-dom";
// Imports
import Jumbotron from './Jumbotron.jsx';
import Searchbar from './Searchbar.jsx';
// ---
import * as schools from './schools';
import SortByName from './SortByName.jsx';
import SortByState from './SortByState.jsx';
// import SortByGame from './SortByGame.jsx';
// import { columnSplit } from './columnSplit';

//  http://www.espn.com/esports/story/_/id/21152905/college-esports-list-varsity-esports-programs-north-america

class Home extends React.Component {
  
  
  
  render() {
//     let schools = uni;
console.log(schools.schools);
    return (
      <React.Fragment>
        
        <Jumbotron />
        <Searchbar />
        <main role="main" className="container">

          
            <nav className="navbar">

              <div className="nav-item col-md-3">
                <span className="navbar-text">Sort by...</span>
              </div>
              <div className="nav-item col-3">
                {/* <Link Component={SortByGame} className="nav-link">Games</Link> */}
              </div>
              <div className="nav-item col-3">
                <Link to="/state" Component={SortByState} className="nav-link">State</Link>
              </div>
              <div className="nav-item col-3">
                <Link to="/name" Component={SortByName} className="nav-link">Name</Link>
              </div>

            </nav>
          

          
            <div className="row mt-3">

            {/* <Route exact path="/" render={() => {return <SortByGame schools={this.schools}/>}}/> */}

            <Route exact path="/state" render={() => {return <SortByState schools={schools.schools}/>}}/>
            
            <Route exact path="/name" render={() => {return <SortByName schools={schools.schools}/>}}/>

            {/* {columnSplit(schools.schools)} */}
              
              

            </div>


        
      </main>

        <footer className="footer page-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 pt-4 pb-4">
                dfsfsd
              </div>
              <div className="col-sm-4 pt-4 pb-4">
                dfsfsd
              </div>
              <div className="col-sm-4 pt-4 pb-4">
                dfsfsd
              </div>
            </div>
          </div>
        
        </footer>


      </React.Fragment>
    )
  }
}
export default Home;