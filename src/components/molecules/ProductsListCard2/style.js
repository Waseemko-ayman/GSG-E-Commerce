import { styled } from "styled-components";

export const StyledProductsListGrid = styled.div`
  text-align: center;
  padding-top: 16px;

  .product_image {
    max-width: 100%;
    width: 184.8px;
    height: 184.8px;
  }

  .info {
    padding: 20px;
    margin-top: 16px;
    border-top: 1px solid var(--gray-300-color);
    text-align: left;
  }

  .info > div {
    margin-bottom: 10px;
  }

  h2 {
    color: var(--dark-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
  }

  .image {
    width: 40px;
    height: 40px;
    padding: 8px;
    border: 1px solid var(--gray-300-color);
    border-radius: 8px;
    cursor: pointer;
  }

  .image img {
    max-width: 100%;
    width: 24px;
  }

  h3 {
    color: var(--dark-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
  }

  del {
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  }

  .rating {
    margin-top: 10px;
  }

  .rating img {
    max-width: 100%;
    width: 75px;
  }

  .rating span {
    color: var(--orange-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .info p:last-of-type {
    color: var(--gray-800-color);
    font-size: 15px;
    font-style: normal;
    line-height: 24px;
  }
`;
