import React, {useState} from "react";

function Item({ name, category }) {
  const [item,setItem] = useState("false")
  const itemClass = item ? "" : "in-cart";

  function addHandler() {
    setItem(!item)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addHandler}>Add to Cart</button>
    </li>
  );
}

export default Item;
