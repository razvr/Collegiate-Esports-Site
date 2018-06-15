import React from 'react';
// import Router from 'React-Router';
//import React-Router from 'React-Router-DOM'; ???????
// Imports
import Jumbotron from './Jumbotron.jsx';
import Searchbar from './Searchbar.jsx';
// ---
import SortByName from './SortByName.jsx';
import SortByState from './SortByState.jsx';
// import SortByGame from './SortByGame.jsx';

//  http://www.espn.com/esports/story/_/id/21152905/college-esports-list-varsity-esports-programs-north-america


class Home extends React.Component {
  
  schools = [
    {
      name: "Robert Morris University",
      city: "Chicago",
      state: "Illinois",
      website: "",
      athletics: "NAIA",
    },
    {
      name: "Illinois College",
      city: "Jacksonville",
      state: "Illinois",
      website: "https://illinoiscollegeathletics.com/index.aspx?path=esports",
      athletics: "Division III",
    },
    {
      name: "Illinois Wesleyan University",
      city: "Bloomington",
      state: "Illinois",
      website: "https://www.iwu.edu/esports/",
      athletics: "Division III",
    },
    {
      name: "Maryville University",
      city: "St. Louis",
      state: "Missouri",
      website: "",
      athletics: "Division II",
    },
    {
      name: "SUNY Canton",
      city: "Canton",
      state: "New York",
      website: "",
      athletics: "Division III",
    },
    {
      name: "Lourdes University",
      city: "",
      state: "Ohio",
      website: "",
      athletics: "NAIA",
    },
    {
      name: "Oregon Institute of Technology",
      city: "",
      state: "Oregon",
      website: "",
      athletics: "NAIA",
    },

    {
      name: "Averett University",
      city: "",
      state: "Virginia",
      website: "",
      athletics: "Division III",
    },
    {
      name: "Boise State University",
      city: "",
      state: "Idaho",
      website: "",
      athletics: "",
    },
    {
      name: "Coker College",
      city: "",
      state: "South Carolina",
      website: "",
      athletics: "",
    },

    {
      name: "College of St. Joseph",
      city: "",
      state: "Vermont",
      website: "",
      athletics: "",
    },

  ]

  render() {

    return (
      <React.Fragment>
        <Jumbotron />
        <Searchbar />

        <div className="schools">
          <div className="container">
            <nav className="navbar">

              <div className="nav-item col-md-3">
                <span className="navbar-text">Sort by...</span>
              </div>
              <div className="nav-item col-3">
                <a href="" className="nav-link">Games</a>
              </div>
              <div className="nav-item col-3">
                <a href="" className="nav-link">State</a>
              </div>
              <div className="nav-item col-3">
                <a href="" className="nav-link">School</a>
              </div>

            </nav>
          </div>

          <div className="container">
            <div className="row">
              
            <ul className="list-unstyled">
              <SortByName schools={this.schools}/>
            </ul>

              {/* <div className="col-lg-4">
                <ul className="list-unstyled">
                  <SortByState schools={this.schools}/>
                </ul>
              </div>
              
              <div className="col-lg-4">2</div>

              <div className="col-lg-4">
                <ul className="list-unstyled">
                  <SortByName schools={this.schools}/>
                </ul>
              </div> */}

            </div>
          </div>

        </div>

        {/* <footer className="page-footer">
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
        
        </footer> */}


      </React.Fragment>
    )
  }
}
export default Home;