import { styled } from "styled-components";

export const StyledDetailsCard = styled.div`
  .card {
    width: 280px;
    height: 325px;
  }

  .title {
    padding-bottom: 15px;
    border-bottom: 1px solid var(--gray-300-color);
  }

  .avatar {
    background-color: #c6f3f1;
    border-radius: 4px;
    color: rgba(76, 167, 167, 0.6);
    padding: 12px;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  .name span {
    display: block;
    color: var(--dark-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  .info {
    margin: 10px 0 32px;
  }

  .info .row {
    padding: 4px 0;
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    display: grid;
    grid-template-columns: 1fr 6fr;
  }

  button:first-of-type {
    margin-bottom: 8px;
  }

  .save_later {
    margin-top: 23px;
    color: var(--primary-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.1px;
    cursor: pointer;
  }
`;
