"use client";
/* eslint-disable @next/next/no-img-element */
import { StyledInput } from "./style";

const Input = ({
  leftImage,
  rightImage,
  type,
  placeholder,
  onChange,
  imageHidden,
  leftImageHidden,
  rightImageHidden,
  removeArrow,
  name,
  onClick,
  register = () => {},
}) => {
  return (
    <StyledInput gap="8px">
      <img
        src={leftImage}
        alt="icon"
        className={`${imageHidden ? "image__hidden" : leftImageHidden ? "left_image_hidden" : ""}`}
      />
      {type === "text" ||
      type === "email" ||
      type === "password" ||
      type === "number" ||
      type === "search" ? (
        <input
          className={`${removeArrow ? "remove__arrow" : ""}`}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          id={name}
          {...register(name)}
        />
      ) : (
        <textarea placeholder={placeholder}></textarea>
      )}
      <img
        src={rightImage}
        alt="icon"
        className={`${imageHidden ? "image__hidden" : rightImageHidden ? "right_image_hidden" : ""}`}
        onClick={onClick}
      />
    </StyledInput>
  );
};

export default Input;
