import { styled } from "styled-components";

export const StyledLandingList = styled.div`
  width: 100%;
  flex: 1;

  @media (max-width: 687px) {
    display: none;
  }
  
  ul {
    list-style: none;
  }
  
  ul li {
    color: var(--gray-600-color);
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 8px;
    cursor: pointer;
  }
  
  ul li:first-child,
  ul li:hover {
    color: var(--dark-color);
    background-color: var(--light-blue);
  }
`;