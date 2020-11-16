import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { name, price, image_url, quantity }, currency }) => {
  return (
    <div className="cart-item">
      <div className="product-description">
        <span className="remove-product" style={{ cursor: "pointer" }}>
          x
        </span>
        <h6>Classic Maintenance Set</h6>
        <div>
          <span className="ff-bau-medium">MADE FOR:</span> here
        </div>
        <div>Dry | 25-34</div>
        <div className="">
          <span className="d-block">
            Two Month <span>supply shipped every two months</span>.
          </span>
          <span>Cancel or change frequency anytime</span>
        </div>
        <div className="quantity">
          <div className="quantity-selector">
            <span className="counter-action decrement">-</span>
            <span className="counter-number counter"> {quantity} </span>
            <span className="counter-action increment">+</span>
          </div>
          <div className="price">
            {currency} &nbsp;{price}
          </div>
        </div>
      </div>
      <img src={image_url} alt="item" />
    </div>
  );
};

export default CartItem;
