import { StyledSection } from "@/style/common";
import { styled } from "styled-components";

export const StyledLoginForm = styled(StyledSection)`
  border: none;
  width: 387px;
  margin: 60px 0 60px 0;

  h1,
  label {
    letter-spacing: -0.2px;
    font-style: normal;
  }

  h1 {
    color: var(--dark-color);
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 20px;
  }

  label {
    display: block;
    color: var(--dark-color);
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
  }

  .box {
    margin: 5px 0 15px;
  }

  .box a {
    color: var(--primary-color);
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

  .remmember {
    margin-bottom: 14px;
  }

  .or {
    background-color: var(--gray-300-color);
    width: 100%;
    height: 1px;
    margin: 30px 0;
    position: relative;
  }

  .or::after {
    content: "OR";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--gray-400-color, #a9acb0);
    background-color: var(--white-color);
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.2px;
    padding: 10px 15px;
  }

  .links a {
    text-align: center;
    color: var(--base-color-gray-800, #606060);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.1px;
    padding: 10px 0;
    width: 100%;
    border-radius: 6px;
    position: relative;
  }

  .links a:first-child {
    color: var(--gray-800-color);
    background-color: var(--white-color);
    border: 1px solid var(--gray-300-color);
  }

  .links a:last-child {
    color: var(--white-color);
    background-color: var(--facebook-color);
    margin-top: 10px;
  }

  .links img {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .error {
    color: var(--danger-color);
    margin-top: 5px;
  }
`;
