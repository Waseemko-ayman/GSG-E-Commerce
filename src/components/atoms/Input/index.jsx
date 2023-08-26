import React from "react";
import "./style.css";

const Input = ({ type, placeholder, onChange }) => {
  return (
    <div className="input_component">
      {type === "text" ? (
        <input type={type} placeholder={placeholder} onChange={onChange} />
      ) : (
        <textarea placeholder={placeholder}></textarea>
      )}
    </div>
  );
};

export default Input;
