"use client";

import { styled } from "styled-components";

const ButtonComponent = styled.button`
  border: 1px solid
    ${(props) =>
      props.borderColor === "primary"
        ? "#0d6efd"
        : props.borderColor === "secondary"
        ? "#fff"
        : "transparent"};

  background-color: ${(props) =>
    props.variant === "primary"
      ? "#0d6efd"
      : props.variant === "secondary"
      ? "#ffffff"
      : ""};

  color: ${(props) =>
    props.color === "primary"
      ? "#0d6efd"
      : props.color === "secondary"
      ? "#fff"
      : props.color === "dark"
      ? "#1c1c1c"
      : ""};
  position: relative;
  border-radius: 6px;
  padding: 10px;
  outline: none;
  cursor: pointer;
  font-weight: 700;
`;

const Button = ({ type, variant, color, borderColor, onClick, size, text }) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      color={color}
      borderColor={borderColor}
      onClick={onClick}
      size={size}
    >
      {text}
    </ButtonComponent>
  );
};

export default Button;
