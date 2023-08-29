"use client"
/* eslint-disable @next/next/no-img-element */
import { StyledInput } from "./style";

const Input = ({ type, placeholder, onChange, imageHidden, removeArrow }) => {
  return (
    <StyledInput gap="6px">
      <img
        src="/assets/email.svg"
        alt="email icon"
        className={`${imageHidden ? "image__hidden" : ""}`}
      />
      {type === "text" || type === "number" || type === "search" ? (
        <input className={`${removeArrow ? "remove__arrow" : ""}`} type={type} placeholder={placeholder} onChange={onChange} />
      ) : (
        <textarea placeholder={placeholder}></textarea>
      )}
    </StyledInput>
  );
};

export default Input;
