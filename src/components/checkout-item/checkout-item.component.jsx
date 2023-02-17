import React from "react";
import store from "../../redux/store";
import { addItemsToCart, clearItemsToCart, removeItemsToCart } from "./../../redux/reducer";

import "./checkout-item.styles.scss";

const CheckoutItemComponent = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => store.dispatch(removeItemsToCart(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => store.dispatch(addItemsToCart(cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => store.dispatch(clearItemsToCart(cartItem))}
      >
        &#10005;
      </span>
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//   clearItem: item => dispatch(clearItemFromCart(item)),
//   addItem: item => dispatch(addItem(item)),
//   removeItem: item => dispatch(removeItem(item))
// });

export const CheckoutItem = CheckoutItemComponent;
