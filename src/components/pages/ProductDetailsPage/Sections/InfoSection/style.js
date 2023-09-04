import { StyledPage } from "@/style/common";
import { styled } from "styled-components";

export const StyledProduct = styled(StyledPage)`
  .product_images {
    position: relative;
  }

  @media (max-width: 768px) {
    .product_images {
      margin: auto;
    }
  }

  .product_images .image {
    max-width: 100%;
    width: 345px;
    height: 345px;
    border: 1px solid var(--gray-300-color);
    border-radius: 6px;
    margin-bottom: 15px;
  }

  .product_images .image img {
    /* max-width: 100%; */
    width: 245px;
    height: 200px;
    
  }

  .product_images div {
    flex-wrap: wrap;
  }

  .product_images div img {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }

  .information .check {
    color: var(--green-color);
    margin-bottom: 5px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }

  h3 {
    color: var(--dark-color);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.2px;
  }

  @media (max-width: 426px) {
    h3 {
      font-size: 16px;
    }
  }

  .rating {
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 11px 0 14px;
  }

  @media (max-width: 426px) {
    .rating {
      flex-wrap: wrap;
      justify-content: center;
      font-size: 14px;
    }
  }

  .rating span {
    color: var(--orange-color);
  }

  .prices {
    background-color: #fff0df;
    width: 100%;
    max-width: 430px;
  }

  .pcs {
    padding-right: 40px;
  }

  .pcs:not(:first-child) {
    padding-left: 10px;
  }

  .pcs:not(:last-child) {
    border-right: 1px solid var(--gray-300-color);
  }

  @media (max-width: 376px) {
    .pcs:not(:first-child) {
      padding-left: 0;
    }
    .pcs:not(:last-child) {
      border-right: none;
    }
  }

  .pcs span {
    display: block;
    font-style: normal;
    line-height: normal;
  }

  .pcs span:first-child {
    color: var(--dark-color);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .pcs:first-of-type span:first-child {
    color: #fa3434;
  }

  .pcs span:last-child {
    color: var(--gray-800-color);
    font-size: 13px;
    font-weight: 400;
  }

  @media (max-width: 426px) {
    .pcs span:first-child {
      font-size: 16px;
    }
    .pcs span:last-child {
      font-size: 12px;
    }
  }

  @media (max-width: 376px) {
    .prices {
      max-width: 100%;
      justify-content: space-between;
      text-align: center;
    }
    .pcs {
      padding-right: 0;
      padding-left: 0;
    }
  }

  .product__type .row {
    padding: 14px 5px 16px;
    border-bottom: 1px solid var(--gray-300-color);
  }

  @media (max-width: 426px) {
    .styled_section {
      margin-top: 20px;
      border-bottom: 1px solid var(--gray-300-color);
    }
  }

  @media (max-width: 426px) {
    .styled_section > div {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
