import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ hidden }) => {
  return <>{!hidden ? <CartDropdown /> : null}</>;
};

const mapStateToProps = ({ cart: { hidden, carts } }) => ({
  hidden,
});
export default connect(mapStateToProps)(Header);
