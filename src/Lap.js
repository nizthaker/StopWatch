import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {formattedSeconds} from "./util"

class Lap extends Component {

 static propTypes = {
    index  : PropTypes.number,
    lap : PropTypes.number,
    onDelete: PropTypes.func
  };

  render() {
    const { index, lap, onDelete} = this.props;

    return(
     <div key={index}  className="stopwatch-lap">
        <strong>{index}</strong>/ {formattedSeconds(lap)} <button onClick={onDelete} > X </button>
      </div>
    );
  }

}
export default Lap;


