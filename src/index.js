import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './Stopwatch';

ReactDOM.render(
  <Stopwatch initialSeconds={0} />,
  document.getElementById("root"),
);