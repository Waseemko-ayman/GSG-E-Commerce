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
  register = () => {},
}) => {
  return (
    <StyledInput gap="6px">
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
          className={`${removeArrow ? "remove__arrow" : rightImageHidden ? "right_image_hidden" : ""}`}
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
        className={`${imageHidden ? "image__hidden" : ""}`}
      />
    </StyledInput>
  );
};

export default Input;
