"use client";

import { styled } from "styled-components";

const ButtonComponent = styled.button`
  position: relative;
  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.borderColor === "primary"
        ? "#0d6efd"
        : props.borderColor === "secondary"
        ? "#fff"
        : "transparent"};

  backgroud-color: ${(props) =>
    props.variant === "primary"
      ? "#0d6efd"
      : props.variant === "secondary"
      ? "#fff"
      : ""};

  color: ${(props) =>
    props.color === "primary"
      ? "#0d6efd"
      : props.color === "secondary"
      ? "#fff"
      : props.color === "dark"
      ? "#1c1c1c"
      : ""};
`;

const Button = ({
  type,
  variant,
  color,
  borderColor,
  onClick,
  size,
  children,
}) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      color={color}
      borderColor={borderColor}
      onClick={onClick}
      size={size}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
