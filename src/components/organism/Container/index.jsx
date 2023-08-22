import React from "react";
import "./style.css";

const Container = ({ children, betweenFlex, flex }) => {
  return (
    <div
      className={`main__container ${
        betweenFlex
          ? "main__container--betweenFlex"
          : flex
          ? "main__container--flex"
          : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
