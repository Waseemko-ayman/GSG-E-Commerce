import { styled } from "styled-components";

export const StyledRelatedProduct = styled.div`
  .image {
    height: 172px;
    background-color: #EEE;
    padding: 20px;
    border-radius: 6px;
  }
  img {
    width: 130px;
    height: 130px;
  }
  .info {
    margin-top: 14px;
  }
  p,
  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    color: var(--gray-600-color);
    margin-bottom: 10px;
  }
  span {
    color: var(--gray-500-color);
  }

  @media (max-width: 426px) {
    .info {
      text-align: center;
    }
  }
`;
