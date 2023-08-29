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
`;