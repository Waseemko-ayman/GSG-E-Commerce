/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./style.css";

const Input = ({ type, placeholder, onChange, imageHidden }) => {
  return (
    <div className="input_component">
      <img
        src="/assets/email.svg"
        alt="email icon"
        className={`${imageHidden ? "image__hidden" : ""}`}
      />
      {type === "text" ? (
        <input type={type} placeholder={placeholder} onChange={onChange} />
      ) : (
        <textarea placeholder={placeholder}></textarea>
      )}
    </div>
  );
};

export default Input;
