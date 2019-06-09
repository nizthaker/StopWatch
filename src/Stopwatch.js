import React, { Component } from "react";
import Lap from "./Lap";
import {formattedSeconds} from "./util"

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: props.initialSeconds,
      laps: [],
      lastClearedIncrementer: null,
    }
     this.incrementer = null;
  }

  handleStartClick = () => {
    this.incrementer = setInterval(() => {
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1,
      });}, 1000);
  }

  handleStopClick = () => {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer,
    });
  }

  handleResetClick = () => {
      clearInterval(this.incrementer);
      this.setState({
        secondsElapsed: 0,
        laps: []
      });
    }

  handleLabClick = () => {
    this.setState({
         laps: this.state.laps.concat([this.state.secondsElapsed])
       })
  }

  handleDeleteClick (index: number) {
      return ()=> {
        const newLap = this.state.laps;
        newLap.splice(index, 1);
         this.setState({
            laps: newLap
         });
      }
  }

  render() {
    const {
      laps,
      secondsElapsed,
      lastClearedIncrementer,
    } = this.state;

    return (
      <div className="stopwatch">
        <h1 className="stopwatch-timer">{formattedSeconds(secondsElapsed)}</h1>

        {(secondsElapsed === 0 || this.incrementer === lastClearedIncrementer
          ? <button type="button" className="start-btn" onClick={this.handleStartClick}>start</button>
          : <button type="button" className="stop-btn" onClick={this.handleStopClick}>stop</button>
        )}

        {(secondsElapsed !== 0 && this.incrementer !== lastClearedIncrementer
          ? <button type="button" onClick={this.handleLabClick}>lap</button>
          : null
        )}

        {(secondsElapsed !== 0 && this.incrementer === lastClearedIncrementer
          ? <button type="button" onClick={this.handleResetClick}>reset</button>
          : null
        )}

        <div className="stopwatch-laps">
          { laps && laps.map((lap, i) =>
            <Lap key={i+1} index={i+1} lap={lap} onDelete={this.handleDeleteClick(i)} />
            )}
        </div>
      </div>
    );
  }
}

export default Stopwatch;