import { React, Component } from "react";

import "./shopmenuitems.styles.scss";
import { ShopCardItems } from "../index";

export class ShopMenuItems extends Component {
  render() {
    return (
      <div className="shop-menuItems">
        <h4 className="title">{this.props.shops.title.toUpperCase()}</h4>
        <div className="preview">
          {this.props.shops.items
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <ShopCardItems item={item} key={item.id} />
            ))}
        </div>
      </div>
    );
  }
}
