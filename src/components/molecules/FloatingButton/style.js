import { styled } from "styled-components";

export const StyledFloading = styled.div`
  button {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    color: var(--white-color);
    font-size: 16px;
    background-color: var(--primary-color);
    z-index: 1000;
  }

  @media (max-width: 768px) {
    button {
      bottom: 50px;
      right: 30px;
    }
  }
`;
