import React from "react";

function DataFooditem({ fooditem }) {
  return (
    <>
      <li key={fooditem} className="list-group-item">
        {fooditem}
      </li>
    </>
  );
}

export default DataFooditem;
