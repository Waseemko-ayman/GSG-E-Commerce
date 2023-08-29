"use client";

import { styled } from "styled-components";

const ButtonComponent = styled.button`
  width: ${(props) => props.width};
  border: 1px solid
    ${(props) =>
      props.borderColor === "primary"
        ? "#0d6efd"
        : props.borderColor === "secondary"
        ? "#fff"
        : props.borderColor === "gray"
        ? "#e3e8ee"
        : "transparent"};

  background-color: ${(props) =>
    props.variant === "primary"
      ? "var(--primary-color)"
      : props.variant === "secondary"
      ? "var(--white-color)"
      : props.variant === "orange"
      ? "var(--orange-color)"
      : ""};

  color: ${(props) =>
    props.color === "primary"
      ? "var(--primary-color)"
      : props.color === "secondary"
      ? "#fff"
      : props.color === "dark"
      ? "var(--dark-color)"
      : props.color === "gray"
      ? "var(--gray-500-color)"
      : ""};
  position: relative;
  border-radius: 6px;
  padding: 10px ${(props) => props.padding};
  outline: none;
  cursor: pointer;
  font-weight: 700;
`;

const Button = ({
  type,
  variant,
  color,
  borderColor,
  onClick,
  size,
  text,
  width,
}) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      color={color}
      borderColor={borderColor}
      onClick={onClick}
      size={size}
      width={width}
    >
      {text}
    </ButtonComponent>
  );
};

export default Button;
