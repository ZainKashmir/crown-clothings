import { React, Component } from "react";

import { addItemsToCart } from "../../redux/reducer";
import store from "../../redux/store";
import { AppButton } from "../appbutton/appbutton";

import "./shopcarditems.styles.scss";

class ShopCardItemsComponent extends Component {
  render() {
    return (
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${this.props.item.imageUrl})` }}
        ></div>
        <div className="collection-footer">
          <span className="name">{this.props.item.name}</span>
          <span className="price">${this.props.item.price}</span>
        </div>
        <div>
        <AppButton      
          className="app-button"
          onClick={() =>
            store.dispatch(
              addItemsToCart({
                ...this.props.item,
                quantity: 1,
              })
            )
          }
        >
          ADD TO CART
        </AppButton>
        </div>
      </div>
    );
  }
}

export const ShopCardItems = ShopCardItemsComponent;
