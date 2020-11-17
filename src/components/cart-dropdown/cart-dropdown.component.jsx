import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item";
import { useQuery } from "@apollo/client";
import { CURRENCY } from "../../graphql/queries";
import { changeCurrency } from "../../redux/cart/cart.action";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ hidden, carts, changeCurrency }) => {
  const [currency, setCurrency] = useState([]);
  const { data, loading } = useQuery(CURRENCY);
  const [currencySelected, setCurrencySelected] = useState("NGN");
  useEffect(() => {
    if (data && data.currency) {
      setCurrency(data.currency);
    }
  });

  const selectCurrency = async ({ target }) => {
    setCurrencySelected(target.value);
    changeCurrency(target.value);
  };
  return (
    <div className="cart-dropdown">
      <div className="currency-select-row">
        {currency ? (
          <select
            className="currency-select "
            style={{ maxWidth: "80px" }}
            value={currencySelected}
            onChange={selectCurrency}
          >
            {currency.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        ) : null}
      </div>
      <div className="cart-items">
        {carts.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
      <div>
        TOTAL :{currencySelected}
        {carts.reduce((acc, cart) => {
          console.log(cart);
          return acc + cart.price * cart.quantity;
        }, 0)}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  carts: state.cart.carts,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrency: (currency) => dispatch(changeCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
