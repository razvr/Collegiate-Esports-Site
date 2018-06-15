import React from "react";

import { schoolsByState } from './schoolsByState';

class SortByState extends React.Component {

  render() {
    return (
      <React.Fragment>
        {schoolsByState(this.props.schools)}
      </React.Fragment>
    )
  }
}
export default SortByState;