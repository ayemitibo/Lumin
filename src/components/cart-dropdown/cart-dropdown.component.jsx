import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item";
import { useQuery, useLazyQuery } from "@apollo/client";
import { CURRENCY, PRODUCTS } from "../../graphql/queries";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ hidden, carts, getCurrency }) => {
  const [currency, setCurrency] = useState([]);
  const { data, loading } = useQuery(CURRENCY);
  const [getProducts, { data: queryData }] = useLazyQuery(PRODUCTS);
  const [currencySelected, setCurrencySelected] = useState("NGN");
  useEffect(() => {
    if (data && data.currency) {
      setCurrency(data.currency);
    }
  });

  const selectCurrency = ({ target }) => {
    setCurrencySelected(target.value);
    getProducts({
      variables: {
        Currency: target.value,
      },
    }).then((res) => {
      console.log(res, "res");
    });
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
          <CartItem item={item} key={index} currency={currencySelected} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  carts: state.cart.carts,
});

export default connect(mapStateToProps)(CartDropdown);
