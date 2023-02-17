import { React, Component } from "react";
import { connect } from "react-redux";

import { AppButton } from "../appbutton/appbutton";

export class UserloginNameComponent extends Component {
  render() {
    return (
      <div>
        {console.log("displayName")}
        <AppButton>{this.props.user && this.props.user.displayName}</AppButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export const UserloginName = connect(mapStateToProps)(UserloginNameComponent);
