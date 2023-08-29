import { StyledSection } from "@/style/common";
import { styled } from "styled-components";

export const StyledCoupon = styled(StyledSection)`
  box-shadow: 0 0 10px #efefef;
  margin-bottom: 12px;
  h3 {
    color: var(--gray-600-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 6px;
  }
  input {
    width: 164px;
    border-radius: 6px 0 0 6px;
  }
  button {
    height: 40px;
    border-radius: 0 6px 6px 0;
  }
`;
