import React from "react";

import { schoolsByGame } from './schoolsByGame';

class SortByGame extends React.Component {

  render() {
    return (
      <React.Fragment>
        {schoolsByGame(this.props.schools)}
      </React.Fragment>
    )
  }
}
export default SortByGame;