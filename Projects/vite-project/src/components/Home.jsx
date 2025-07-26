import React, { useState } from "react";
import Cards from "./Cards";
import Counter from "./Counter";

function Home() {
  const [count, setCount] = useState(0);

  function handlerfun() {
    setCount(count + 1);
  }

  function deletefun() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="container text-center my-5">
        <h2>Welcome to the Home Page</h2>
      </div>

      <Cards change="Hello World" tittle="Second Card" third="Third Card" />

      <center>
        <h1>{count}</h1>
        <Counter deletefun={deletefun} handlerfun={handlerfun}>
          <h1>Props, useState, and props.children</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Best of luck!</p>
        </Counter>
      </center>
    </>
  );
}

export default Home;
