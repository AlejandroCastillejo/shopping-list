import React, { useState } from "react";

import "./add-item-form.scss";

function AddItemForm({ items, setItems }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addItemToList = () => {
    setItems([...items, { name, quantity }]);
  };

  return (
    <div className="add-item-form">
      <h4>Add new item to list</h4>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          addItemToList();
        }}
      >
        <label htmlFor="name">Name </label>
        <input
          id="name"
          type="text"
          placeholder="name"
          required
          onChange={(evt) => setName(evt.target.value)}
        />
        <br />
        <br />
        <label htmlFor="quantity">Quantity </label>
        <input
          id="quantity"
          type="text"
          placeholder="uds."
          required
          onChange={(evt) => setQuantity(evt.target.value)}
        />
        <br />
        <br />
        <button type="submit">Add to list</button>
      </form>
    </div>
  );
}

export default AddItemForm;
