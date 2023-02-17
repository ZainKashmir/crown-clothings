import { Component } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/index";
import { Homepage } from "./pages/index";
import { Shop } from "./pages/index";
import { Authentication } from "./pages/authentication/authentication.page";
import { auth, createUserProfileDocument } from "./firebas/firebase.utils";
import store from "./redux/store";
import { currentUserValue } from "./redux/users";
import { Checkout } from "./pages/checkout/checkout.page";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: "null",
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      // this.setState({ currentUser: user });

      store.dispatch(currentUserValue(user));

      createUserProfileDocument(user);
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Authentication />} />
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/authentication" element={<Authentication />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    );
  }
}
export default App;
