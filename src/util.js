//formats time
export const formattedSeconds = (sec) =>
  Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2);