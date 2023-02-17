import { Component } from "react";

import { signInWithGoogle, auth } from "../../firebas/firebase.utils";
import { AppInput, AppButton } from "../index";
import "./singn-in.styles.scss";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    auth.signInWithEmailAndPassword(email, password);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I Already have An Acount</h2>
        <h2>Sign In With Email and Password</h2>
        <form onSubmit={this.handleSubmit}>
          <AppInput
            name={"email"}
            type={"email"}
            label={"email"}
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <AppInput
            name={"password"}
            type={"password"}
            label={"password"}
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <AppButton> sign in </AppButton>
          <AppButton onClick={signInWithGoogle}>sign in with google</AppButton>
        </form>
      </div>
    );
  }
}
