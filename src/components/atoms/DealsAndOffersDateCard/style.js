import { styled } from "styled-components";

export const StyledDateCard = styled.div`
  color: var(--white-color);
  background-color: var(--gray-800-color);
  width: 45px;
  height: 50px;
  border-radius: 4px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  span {
    display: block;
    font-style: normal;
    line-height: normal;
  }

  span:first-of-type {
    font-size: 16px;
    font-weight: 700;
  }

  span:last-of-type {
    font-size: 12px;
    font-weight: 400;
  }
`;
