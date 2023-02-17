import { Component } from "react";

import { auth, createUserProfileDocument } from "../../firebas/firebase.utils";
import { AppInput, AppButton } from "../index";
import { UserloginName } from "../userName/userloginName";
import "./singn-up.styles.scss";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      showChild: false,
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  showComponent = () => {
    this.setState({ showChild: !this.state.showChild });
  };

  render() {
    return (
      <div>
        <h2>I Don't Have An Account</h2>
        <h3>Sign Up With Name Email and Password</h3>
        <div className="sign-up">
          <form onSubmit={this.handleSubmit}>
            <AppInput
              name="displayName"
              type={"text"}
              label={"displayName"}
              value={this.state.displayName}
              handleChange={this.handleChange}
            />
            <AppInput
              name="email"
              type={"email"}
              label={"email"}
              value={this.state.email}
              handleChange={this.handleChange}
            />

            <AppInput
              name="password"
              type={"password"}
              label={"password"}
              value={this.state.password}
              handleChange={this.handleChange}
            />
            <AppInput
              name="confirmPassword"
              type={"password"}
              label={"Confirm password"}
              value={this.state.confirmPassword}
              handleChange={this.handleChange}
            />
            <AppButton> sign up </AppButton>
          </form>

          <AppButton onClick={this.showComponent}>Show and hide</AppButton>

          {this.state.showChild && <UserloginName />}
        </div>
      </div>
    );
  }
}
