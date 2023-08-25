import { styled } from "styled-components";

export const StyledPaper = styled.div`
  width: 200px;
  height: 95px;
  border-radius: 6px;
  background: ${(props) =>
    props.variant === "orange"
      ? "#f38332"
      : props.variant === "light-blue"
      ? "#55BDC3"
      : "#f38332"};
  padding: 16px 40px 22px 16px;
  margin-top: 10px;

  p {
    color: var(--white-color);
    width: 144px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
