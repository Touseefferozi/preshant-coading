import React from "react";
import Additem from "./Additem";
import AddTodo from "./AddTodo";

const TodoList = ({ object }) => {
  return (
    <>
      <div className="con">
        <AddTodo />
        <hr />
        {object.map((item) => (
          <Additem todoName={item.name} todoDate={item.date} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
