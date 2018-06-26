import React from 'react';
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// Imports
import Jumbotron from './Jumbotron.jsx';
import Searchbar from './Searchbar.jsx';
// ---
// import * as schools from './schools';
import SortByName from './SortByName.jsx';
import SortByState from './SortByState.jsx';
// import SortByGame from './SortByGame.jsx';
// import { columnSplit } from './columnSplit';

//  http://www.espn.com/esports/story/_/id/21152905/college-esports-list-varsity-esports-programs-north-america

class Home extends React.Component {
  
  render() {

    console.log('prop', this.props);
    console.log('state', this.state);
    // if (!this.props.schools){
    //   return null;
    // }

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
                {/* <Link component={SortByGame} className="nav-link">Games</Link> */}
              </div>
              <div className="nav-item col-3">
                <Link to="/state" className="nav-link">State</Link>
              </div>
              <div className="nav-item col-3">
                <Link to="/name" className="nav-link">Name</Link>
              </div>

            </nav>
          

          
            <div className="row mt-3">

            {/* <Route exact path="/" render={() => {return <SortByGame schools={this.schools}/>}}/> */}

            <Route exact path="/state" render={() => {return <SortByState schools={this.props.schools}/>}}/>
            
            <Route exact path="/name" render={() => {return <SortByName schools={this.props.schools}/>}}/>

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
function mapStateToProps(state) {
  return {
    schools: state.schools, 
    games: state.games
  }
};

export default connect(mapStateToProps, null) (Home);
// export default Home;