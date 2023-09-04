import { styled } from "styled-components";

export const StyledHomeAndConsumer = styled.div`
  width: 245px;

  @media (min-width: 992px) {
    height: 245px;
  }

  @media (max-width: 992px) {
    & {
      width: 100%;
    }
    img {
      display: none;
    }
  }

  .text {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  h2 {
    color: var(--dark-color);
    width: 130px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: -0.2px;
    margin-bottom: 18px;
  }

  @media (max-width: 992px) {
    .text {
      position: relative;
      margin-bottom: 40px;
    }
    h2 {
      width: 100%;
    }
    h2 + button {
      display: none;
    }
  }
`;
