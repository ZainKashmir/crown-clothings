import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from "../../assets/images.assets/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/reducer";
import store from "../../redux/store";
// import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import "./cart-icon.styles.scss";

const CartIconComponent = ({ itemCount }) => (
  <div
    className="cart-icon"
    onClick={() => {
      store.dispatch(toggleCartHidden());
    }}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapStateToProps = (state) => ({
  itemCount: state.cart.cartItems.length,
});

export const CartIcon = connect(mapStateToProps)(CartIconComponent);
