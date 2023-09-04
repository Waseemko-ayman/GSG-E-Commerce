const { styled } = require("styled-components");

export const StyledLogo = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }

  img {
    width: 44px;
    height: 44px;
  }

  h1 {
    color: #8cb7f5;
    font-size: 30px;
  }

  @media (min-width: 427px) and (max-width: 1024px) {
    img {
      width: 36px;
      height: 36px;
    }
    h1 {
      font-size: 25px;
    }
  }

  @media (max-width: 426px) {
    img {
      width: 33px;
      height: 33px;
    }
    h1 {
      font-size: 22px;
    }
  }
`;
