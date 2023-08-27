/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./style.css";

const Input = ({ type, placeholder, onChange, imageHidden, removeArrow }) => {
  return (
    <div className="input_component">
      <img
        src="/assets/email.svg"
        alt="email icon"
        className={`${imageHidden ? "image__hidden" : ""}`}
      />
      {type === "text" || type === "number" ? (
        <input className={`${removeArrow ? "remove__arrow" : ""}`} type={type} placeholder={placeholder} onChange={onChange} />
      ) : (
        <textarea placeholder={placeholder}></textarea>
      )}
    </div>
  );
};

export default Input;
