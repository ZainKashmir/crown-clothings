import React, { Component } from "react";
import { connect } from "react-redux";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import { PriceCheckout } from "../../components/stripe.button/stripe.button";
import "./checkout.page.style.scss";

export class CheckoutComponent extends Component {
  render() {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {this.props.cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <div className="total">TOTAL: ${this.props.total()}</div>
        <PriceCheckout/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  total: () => {
    const sumOfCart = state.cart.cartItems.reduce(
      (accumQuantity, cartItem) =>
        accumQuantity + cartItem.quantity * cartItem.price,
      0
    );
    if (sumOfCart === 0) {
      return <h5>YOUR CART IS EMPTY</h5>;
    } else {
      return sumOfCart;
    }
  },
  
});

export const Checkout = connect(mapStateToProps)(CheckoutComponent);
