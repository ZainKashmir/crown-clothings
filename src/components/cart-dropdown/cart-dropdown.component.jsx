import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppButton } from "../appbutton/appbutton";
import { CartItem } from "./../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/reducer";
import "./cart-dropdown.styles.scss";
import store from "../../redux/store";

const CartDropdownComponent = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <AppButton
          onClick={() => {
            store.dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </AppButton>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems });

export const CartDropdown = connect(mapStateToProps)(CartDropdownComponent);
