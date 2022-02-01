import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h3>Grocery Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h3>Produce</h3>
      <ItemList items={produce} onItemClick={addItem} />
      <h3>Pantry Items</h3>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
