import React from "react";

import { SignIn, SignUp } from "../../components/index";
import "./authentication.styles.scss";

export const Authentication = (props) => {
  return (
    <div className="authentication">
      {console.log("Authentication")}
      <SignIn />
      <SignUp />
    </div>
  );
};
