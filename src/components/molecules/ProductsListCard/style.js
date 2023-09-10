import { styled } from "styled-components";

export const StyledProductsList = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;

  .info {
    width: 100%;
  }

  .product_image {
    max-width: 100%;
    width: 175px;
    height: 175px;
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
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.2px;
  }

  del {
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .rating {
    margin-top: 5px;
  }

  .rating div:first-of-type img {
    max-width: 100%;
    width: 80px;
  }

  .rating div:first-of-type span {
    color: var(--orange-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img.dot {
    max-width: 100%;
    width: 6px;
  }

  .rating .orders span {
    color: var(--gray-500-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .free__shipping {
    color: var(--green-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .info p:last-of-type {
    color: var(--gray-600-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin: 15px 0 8px;
  }

  .transition {
    margin-top: 10px;
    width: fit-content;
    cursor: pointer;
  }

  h4 {
    color: var(--primary-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .transition svg {
    animation: transition 0.7s linear infinite alternate;
  }

  @keyframes transition {
    from {
      transform: translate(0);
    }
    to {
      transform: translate(10px);
    }
  }
`;
