import React from "react";

function ErrorMsg({ items }) {
  //   let fooditems = [
  //     "Dal",
  //     "Sabzi",
  //     "Mutton",
  //     "Biryani",
  //     "Korma",
  //     "Aloo Mattar",
  //     "Kheer",
  //     "Pulao",
  //   ];

  return <>{items.length === 0 ? <h2>Im Still Hungry</h2> : null}</>;
}

export default ErrorMsg;
