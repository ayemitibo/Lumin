import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { name, price, image_url, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={image_url} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
