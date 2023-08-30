import { styled } from "styled-components";

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  
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
      : props.variant === "facebook"
      ? "#4267B2"
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
      : props.color === "gray-800"
      ? "var(--gray-800-color)"
      : props.color === "danger"
      ? "var(--danger-color)"
      : ""};

  width: ${(props) => props.width};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  outline: none;
  cursor: pointer;
  font-weight: 700;

  .image__hidden {
    display: none;
  }

  img {
    width: 22px !important;
    height: 22px !important;
  }
`;
