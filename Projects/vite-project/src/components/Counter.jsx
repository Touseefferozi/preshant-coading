import React from "react";

const Counter = ({ handlerfun, children, deletefun }) => {
  return (
    <div>
      <button className="btons" onClick={handlerfun}>
        Add
      </button>

      <button className="btons" onClick={deletefun}>
        Delete
        
      </button>
      {children}
      <h1></h1>
    </div>
  );
};

export default Counter;
