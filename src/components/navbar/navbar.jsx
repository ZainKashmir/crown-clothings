import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images.assets/logo.svg";
import "./navbar.scss";
import { auth } from "../../firebas/firebase.utils";
import { connect } from "react-redux";
import { CartIcon } from "./../cart-icon/cart-icon.component";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";

export class NavbarComponent extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt={logo} />
          </Link>
        </div>
        <div className="options">
          <ul className="option">
            <Link className="option" to="/shop">
              Shop
            </Link>
            <Link className="option" to="/contact">
              Contact
            </Link>
            {this.props.user ? (
              <Link
                onClick={() => auth.signOut()}
                className="option"
                to="/authentication"
              >
                Sign Out
              </Link>
            ) : (
              <Link className="option" to="/authentication">
                Sign In
              </Link>
            )}
          </ul>
          <CartIcon />
          {this.props.hidden ? null : <CartDropdown />}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user.user,
  hidden: state.cart.hidden,
});

export const Navbar = connect(mapStateToProps)(NavbarComponent);
