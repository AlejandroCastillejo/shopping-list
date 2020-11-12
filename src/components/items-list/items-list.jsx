import React, { useEffect, useState } from "react";

import "./items-list.scss";

function ItemsList({ items }) {
  const [totalItems, setTotalItems] = useState("");

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += parseInt(item.quantity);
    });
    setTotalItems(total.toString());
  }, [items]);

  return (
    <div className="items-list">
      <div className="items-list-header">
        <span className="header-block">Item</span>
        <span className="header-block">Quantity</span>
      </div>

      <div className="items-list-body">
        {items &&
          items.map((item, index) => {
            return (
              <div key={index} className="body-item">
                <span className="item-field">{item.name}</span>
                <span className="item-field">{item.quantity}</span>
              </div>
            );
          })}
      </div>
      <br />
      <div className="items-list-footer">
        <span className="footer-block">Total</span>
        <span className="footer-block">{totalItems}</span>
      </div>
    </div>
  );
}

export default ItemsList;
