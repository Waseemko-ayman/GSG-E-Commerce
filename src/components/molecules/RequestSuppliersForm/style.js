import { styled } from "styled-components";

export const StyledSupliersForm = styled.div`
  position: relative;
  width: 491px;
  background-color: var(--white-color);
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
  border-radius: 6px;
  padding: 30px 20px;

  @media (max-width: 768px) {
    display: none;
  }

  h4 {
    color: var(--dark-color);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 18px;
  }

  .input_box {
    margin-bottom: 18px;
  }

  form input {
    display: block;
  }

  form select {
    width: 111px;
    height: 40px;
    color: var(--dark-color);
    background-color: var(--white-color);
    border: 1px solid var(--gray-300-color);
    border-radius: 6px;
    font-size: 18px;
    padding: 10px;
    outline: none;
    cursor: pointer;
  }

  .error {
    color: var(--danger-color);
    margin-top: 10px;
    padding: 5px;
    border-radius: 2px;
    background-color: rgba(255, 0, 0, 0.219);
  }
`;
