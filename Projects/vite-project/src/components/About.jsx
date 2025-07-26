import React from "react";

function About({ name, age }) {
  return (
    <>
      <div className="heading py-4 text-center">
        <h1>About Us</h1>
      </div>
    
      <div className="card mb-4">
        <img
          src="https://kinsta.com/es/wp-content/uploads/sites/8/2023/06/install-react.jpg"
          className="card-img-top"
          alt="React Install"
        />
        <div className="card-body">
          <h5 className="card-title">React Developer</h5>
          <p className="card-text">
            We build fast and interactive UIs using ReactJS. This is a basic
            Bootstrap card.
          </p>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>

      <hr />

      <h3 className="text-center">
        Assalamualaikum {name}, You are {age} years old.
      </h3>

      <hr />

      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0XbtTs5AS8Yd7EFb_sUWrjT-a9JX3MxgdUH7SpMPDe4tE_oI1VLCY9m7I0HUpZiRrmXQ&usqp=CAU"
          className="card-img-top"
          alt="Placeholder"
        />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            className="btn btn-primary disabled placeholder col-6"
            aria-disabled="true"
          ></a>
        </div>
      </div>
    </>
  );
}

export default About;
