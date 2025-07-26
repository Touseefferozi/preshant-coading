import React from "react";

function AddTodo() {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            <input type="text" placeholder="Enter Todo here" />
          </div>
          <div class="col-4">
            <input type="datetime-local" />
          </div>
          <div class="col-2">
            <button className="btn btn-success">Add</button>
          </div>
        </div>

    

      </div>
    </>
  );
}

export default AddTodo;
