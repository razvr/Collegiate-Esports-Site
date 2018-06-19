import React from "react";

import { schoolsByGame } from './schoolsByGame';

class SortByGame extends React.Component {

  render() {
    return (
      <React.Fragment>
        <ul className="list-unstyled">
          {schoolsByGame(this.props.schools)}
        </ul>
      </React.Fragment>
    )
  }
}
export default SortByGame;