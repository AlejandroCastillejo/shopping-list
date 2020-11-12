import "./homepage.scss";
import React, { useState, useEffect } from "react";

import { ShoppingListAPI } from "../../services/shopping-list-api";

import WithSpinner from "../../components/with-spinner/with-spinner";
import ItemsList from "../../components/items-list/items-list";
import AddItemForm from "../../components/add-item-form/add-item-form";

const ItemsListWithSpiner = WithSpinner(ItemsList);

function HomePage() {
  const [loading, setLoading] = useState(true);

  const [items, setItems] = useState([]);

  useEffect(async () => {
    await ShoppingListAPI.getItemsList()
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  return (
    <div className="homepage">
      <AddItemForm items={items} setItems={setItems} />
      <br />
      <ItemsListWithSpiner isLoading={loading} items={items} />
    </div>
  );
}

export default HomePage;
