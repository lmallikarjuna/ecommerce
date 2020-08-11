import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, inverted, isGoogleSignIn, ...others }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...others}
    >
      {children}
    </button>
  );
};

export default CustomButton;
