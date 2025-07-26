import React from "react";

function Additem({ todoName, todoDate }) {
  return (
    <div className="row text-center mb-2">
      <div className="col-5">{todoName}</div>
      <div className="col-5">{todoDate}</div>
      <div className="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default Additem;
