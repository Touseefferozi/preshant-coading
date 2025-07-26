import React from "react";
import Time from "./Time";

function Clock() {
  return (
    <>
      <center>
        <div className="clock">
          <h1>Pakistan Clock</h1>
          <h2>
            This is the clock that shows the time in Pakistan at all times
          </h2>
          <Time />
        </div>
      </center>
    </>
  );
}

export default Clock;
