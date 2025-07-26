import React from "react";
import AppName from "./AppName";

import TodoList from "./TodoList";

function About() {
  const object = [
    { name: "Buy Bag", date: "14/08/2025" },
    { name: "Buy Pencil", date: "15/08/2025" },
    { name: "Buy Car", date: "Right now" },
  ];

  return (
    <>
      <center> About Us</center>
      <br />
      <hr />
      <center>
        <AppName />
        <TodoList object={object} />
      </center>
    </>
  );
}

export default About;
