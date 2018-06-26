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


let ListSchoolsByName = (schools) => {

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
      if (schools[0] === school){
        return [
          printLetter(letterCheck, 0),
          printSchool(school)
        ]
      } else {
        return [
          printLetter(letterCheck),
          printSchool(school)
        ]
      }
    }
    else if (letterCheck === currentLetter) {
      return printSchool(school);
    }
    else {
      return <li>There was an error when fetching a list of schools.</li>
    }
  })
};



export function schoolsByName(data) {
  
  if (!data){
    return null;
  }

  let columns = 3;

  data.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  
  let ters = [];
  let letterSet = null;
  
  for (let i in data) {
    let letterCheck = data[i].name.charAt(0);
    if (letterCheck !== letterSet){
      if (letterCheck !== ""){
        ters.push(letterCheck);
        letterSet = letterCheck;
      }
    }
  }
  
  let list = ters.length;
  
  let perColumn = Math.floor(list / columns);
  let groupOne = ters.slice(0, perColumn + 1);
  let groupTwo = ters.slice(perColumn, -perColumn);
  let groupThree = ters.slice(-perColumn, list);
  
  let partOne = [];
  let partTwo = [];
  let partThree = [];
  
    for (let q in data) {

    let tester = data[q].name.charAt(0);
   
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
          {ListSchoolsByName(partOne)}
        </ul>
        <hr/>
      </div>
      <div className="col-md-4">
        <ul className="list-unstyled">
          {ListSchoolsByName(partTwo)}
        </ul>
        <hr/>
      </div>
      <div className="col-md-4">
        <ul className="list-unstyled">
          {ListSchoolsByName(partThree)}
        </ul>
      </div>
    </React.Fragment>
  );
};