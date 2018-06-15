import React from "react";

import { schoolsByName } from './schoolsByName';

class SortByName extends React.Component {

  render() {
    return (
      <React.Fragment>
        {schoolsByName(this.props.schools)}
      </React.Fragment>
    )
  }
}
export default SortByName;