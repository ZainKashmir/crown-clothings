import React from "react";

import "./appinput.styles.scss";

export const AppInput = ({ handleChange, type, label, ...props }) => {
  return (
    <div className="group" onChange={handleChange} {...props}>
      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} app-input-label`}
        >
          {label}
        </label>
      ) : null}

      <input
        onChange={handleChange}
        className="app-input"
        type={type}
        {...props}
      />
    </div>
  );
};
