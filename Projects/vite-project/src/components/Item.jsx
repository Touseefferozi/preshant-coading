import React from "react";
import Fooditems from "./Fooditems";
import ErrorMsg from "./ErrorMsg";
import styles from "./Item.module.css";
function Item() {
  let fooditems = [
    "Dal",
    "Sabzi",
    "Mutton",
    "Biryani",
    "Korma",
    "Aloo Mattar",
    "Kheer",
    "Pulao",
  ];
  return (
    <>
      <div className={styles.food}>
        <h1>Food Items</h1>
        <ErrorMsg items={fooditems} />
        <Fooditems items={fooditems} />
      </div>
      <hr />
    </>
  );
}

export default Item;
