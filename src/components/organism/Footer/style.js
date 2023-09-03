import { StyledFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledFooter = styled(StyledFlex)`
  background-color: var(--white-color);
  padding: 40px 20px 60px;
`;

export const StyledFooterContent = styled(StyledFlex)`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 25px;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 321px) {
    .info {
      text-align: center;
    }
    .info div,
    a {
      justify-content: center;
    }
  }

  .info p {
    color: var(--gray-600-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin: 16px 0 15px;
  }

  h3 {
    color: var(--dark-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 10px;
  }

  img {
    display: block;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .lists {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 25px;
  }

  @media (max-width: 321px) {
    .lists {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      text-align: center;
    }
  }
`;
