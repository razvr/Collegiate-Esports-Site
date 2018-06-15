import React from 'react';
// Imports


class Searchbar extends React.Component {
  render() {
    return (

      <div className="searchbar">
        <div className="container">
          <div className="form-group row p-3">
            <div className="col-sm-5 offset-sm-3">
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="col-sm-2">
              <button className="btn btn-primary" type="button" >Go!</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default Searchbar;