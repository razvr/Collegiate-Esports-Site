import React from 'react';

let printLetter = (x) => {
  if (x === "A") {
    return <h2>{x}</h2>
  }
  else {
    return <React.Fragment>
      <hr />
      <h2>{x}</h2>
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

export function schoolsByName(schools) {

  schools.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    
  let currentLetter = null;
  return schools.map((school) => {
    let letterCheck = school.name.charAt(0);
    if (letterCheck !== currentLetter) {
      currentLetter = letterCheck;
        return [
          printLetter(letterCheck),
          printSchool(school)
        ]
    }
    else if (letterCheck === currentLetter) {
      return printSchool(school);
    }
    else {
      return <h1>There was an error when fetching a list of schools.</h1>
    }
  })
};