import React from 'react';

let printLetter = (x) => {
  if (x === "A") {
    return <h3>{x}</h3>
  }
  else {
    return <React.Fragment>
      <hr />
      <h3>{x}</h3>
    </React.Fragment>
  };
};

let printSchool = (school) => {
  return (
    <li>
      <a href=".">{school.name}</a> - <small>{school.city}, {school.state}</small>
    </li>
  )
};

export function schoolsByState(schools) {

  schools.sort(function (a, b) {
      if (a.state < b.state) return -1;
      if (a.state > b.state) return 1;
      return 0;
    })
    
  let currentState = null;
  return schools.map((school) => {
    let stateCheck = school.state;
    if (stateCheck !== currentState) {
      currentState = stateCheck;
        return [
          printLetter(stateCheck),
          printSchool(school)
        ]
    }
    else if (stateCheck === currentState) {
      return printSchool(school);
    }
    else {
      return <h1>There was an error when fetching a list of schools.</h1>
    }
  })
};