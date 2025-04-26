import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  let myname = "Touseef Bashir Ferozi";
  let myage = 20;
  return (
    <>
      <Navbar />
      <center>
        <h1 className="Main">
          Hi My Name is : {myname} : Age {myage}
        </h1>
      </center>
      <Footer />
    </>
  );
}

export default App;
