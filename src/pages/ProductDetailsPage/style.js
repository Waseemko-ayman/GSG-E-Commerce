import { StyledPage } from "@/style/common";
import { styled } from "styled-components";

export const StyledProduct = styled(StyledPage)`
.product_images {
  position: relative;
  /* background-color: red; */
}

.product_images img {
  max-width: 100%;
  border: 1px solid var(--gray-300-color);
  border-radius: 6px;
}

.product_images > img {
  width: 345px;
  margin-bottom: 15px;
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

.information h3 {
  color: var(--dark-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.2px;
}

.information .rating {
  margin: 11px 0 14px;
}

.information .rating {
  color: var(--gray-500-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.information .rating span {
  color: var(--orange-color);
}

.prices {
  background-color: #fff0df;
  width: 430px;
}

.prices .pcs {
  padding-right: 40px;
}

.prices .pcs:not(:first-child) {
  padding-left: 10px;
}

.prices .pcs:not(:last-child) {
  border-right: 1px solid var(--gray-300-color);
}

.prices .pcs span {
  display: block;
}

.prices .pcs span:first-child {
  color: var(--dark-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 5px;
}

.prices .pcs:first-of-type span:first-child {
  color: #fa3434;
}

.prices .pcs span:last-child {
  color: var(--gray-800-color);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.product__type .row {
  padding: 14px 5px 16px;
  border-bottom: 1px solid var(--gray-300-color);
}
`;