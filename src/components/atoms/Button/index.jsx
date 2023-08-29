"use client";

import { styled } from "styled-components";

const ButtonComponent = styled.button`
  width: ${(props) => props.width};
  border: 1px solid
    ${(props) =>
      props.borderColor === "primary"
        ? "var(--primary-color)"
        : props.borderColor === "secondary"
        ? "#fff"
        : props.borderColor === "gray"
        ? "var(--gray-300-color)"
        : "transparent"};

  background-color: ${(props) =>
    props.variant === "primary"
      ? "var(--primary-color)"
      : props.variant === "secondary"
      ? "var(--white-color)"
      : props.variant === "orange"
      ? "var(--orange-color)"
      : props.variant === "green"
      ? "var(--green-color)"
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
      : props.color === "danger"
      ? "var(--danger-color)"
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
