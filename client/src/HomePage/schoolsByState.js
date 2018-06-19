import React from 'react';


let printLetter = (x, y) => {
  if (x === "A" || y === 0 ) {
    return <h4>{x}</h4>
  }
  else {
    return <React.Fragment>
      <hr />
      <h4>{x}</h4>
    </React.Fragment>
  };
};


let printSchool = (school) => {
  return (
    <li key={""}>
      <a href=".">{school.name}</a> - <small>{school.city}, {school.state}</small>
    </li>
  )
};


export function ListSchoolsByState(schools) {

  // schools.sort(function (a, b) {
  //   if (a.name < b.name) return -1;
  //   if (a.name > b.name) return 1;
  //   return 0;
  // })
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
      if (schools[0] === school){
        return [
          printLetter(stateCheck, 0),
          printSchool(school)
        ]
      } else {
        return [
          printLetter(stateCheck),
          printSchool(school)
        ]
      }
    }
    else if (stateCheck === currentState) {
      return printSchool(school);
    }
    else {
      return <h1>There was an error when fetching a list of schools.</h1>
    }
  })
};


export function schoolsByState(data) {
  
  let columns = 3;

  data.sort(function (a, b) {
    if (a.state < b.state) return -1;
    if (a.state > b.state) return 1;
    return 0;
  })
  
  let states = [];
  let stateSet = null;

  for (let i in data) {
    let stateCheck = data[i].state;
    if (stateCheck !== stateSet){
      if (stateCheck !== ""){
        states.push(stateCheck);
        stateSet = stateCheck;
      }
    }
  }
  
  let list = states.length;
  
  let perColumn = Math.floor(list / columns);
  let groupOne = states.slice(0, perColumn );
  let groupTwo = states.slice(perColumn, -perColumn-1);
  let groupThree = states.slice(-perColumn-1, list);
  
  debugger
  let partOne = [];
  let partTwo = [];
  let partThree = [];
  
    for (let q in data) {

    let tester = data[q].state;
   
    if ( groupOne.includes(tester) ){
      partOne.push( data[q] );
    }
    else if ( groupTwo.includes(tester) ){
      partTwo.push( data[q] );
    }
    else if ( groupThree.includes(tester) ){
      partThree.push( data[q] );
    }
  }

  return (
    <React.Fragment>
      <div className="col-md-4">
        <ul className="list-unstyled">
          {ListSchoolsByState(partOne)}
        </ul>
        <hr/>
      </div>
      <div className="col-md-4">
        <ul className="list-unstyled">
          {ListSchoolsByState(partTwo)}
        </ul>
        <hr/>
      </div>
      <div className="col-md-4">
        <ul className="list-unstyled">
          {ListSchoolsByState(partThree)}
        </ul>
      </div>
    </React.Fragment>
  );
};