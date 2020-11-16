import React from "react";
import { connect } from "react-redux";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ hidden }) => {
  return <>{!hidden ? <CartDropdown /> : null}</>;
};

const mapStateToProps = ({ cart: { hidden, carts } }) => ({
  hidden,
});
export default connect(mapStateToProps)(Header);
