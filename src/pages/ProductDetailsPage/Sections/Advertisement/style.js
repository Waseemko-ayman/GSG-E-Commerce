import { styled } from "styled-components";

export const StyledAdvertisement = styled.div`
  background-color: var(--primary-color);
  padding: 30px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin-bottom: 88px;
  
  &::before {
    content: "";
    position: absolute;
    background-color: #005ADE;
    right: -20px;
    top: 0;
    width: 40%;
    height: 100%;
    transform: skewX(20deg);
  }

  h3,
  p {
    color: var(--white-color);
  }
  h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
  }
`;
