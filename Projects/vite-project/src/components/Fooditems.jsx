import React from "react";
import DataFooditem from "./DataFooditem";

function Fooditems({ items }) {
  return (
    <div className="food">
      <ul className="list-group">
        {items.map((item, index) => (
          <DataFooditem key={index} fooditem={item} />
        ))}
      </ul>
    </div>
  );
}

export default Fooditems;
