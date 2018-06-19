import React from "react";

import { schoolsByName } from './schoolsByName';




let columns = 3;

export function columnSplit(data) {
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
  
  let list = ters.length; // 9
  
  let perColumn = Math.floor(list / columns);  // 3
  let groupOne = ters.slice(0, perColumn + 1);
  let groupTwo = ters.slice(perColumn, -perColumn);
  let groupThree = ters.slice(-perColumn, list);
  
  debugger
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
          {schoolsByName(partOne)}
        </ul>
        <hr/>
      </div>
      <div className="col-md-4">
        <ul className="list-unstyled">
          {schoolsByName(partTwo)}
        </ul>
        <hr/>
      </div>
      <div className="col-md-4">
        <ul className="list-unstyled">
          {schoolsByName(partThree)}
        </ul>
      </div>
    </React.Fragment>
  );
};