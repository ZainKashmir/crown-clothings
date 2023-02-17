import React from "react";

import "./appbutton.styles.scss";
export const AppButton = ({ children, ...props }) => {
  return (
    <div>
      <button type="submit" className="app-button" {...props}>
        {children}
      </button>
    </div>
  );
};
