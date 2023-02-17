import React, { Component } from "react";

import "./menuItems.scss";
import { Link } from "react-router-dom";
export class MenuItems extends Component {
  render() {
    return (
      <div className={`${this.props.sections.size} menu-item`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${this.props.sections.imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{this.props.sections.title.toUpperCase()}</h1>
          <div>
            <Link className="subtitle" to="/shop">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
