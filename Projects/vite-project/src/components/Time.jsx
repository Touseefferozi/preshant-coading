import React from "react";

function Time() {
  // current time

  const currentTime = new Date();

  return (
    <h3 className="Time">
      This is The current Time:{currentTime.toLocaleDateString()} - 
      {currentTime.toLocaleTimeString()}
    </h3>
  );
}

export default Time;
