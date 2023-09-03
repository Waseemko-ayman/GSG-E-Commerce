"use client";
import { StyledBetweenAlignFlex } from "@/style/common";
import Container from "../Container";
import { StyledCopyRight } from "./style";

const CopyRight = () => {
  return (
    <StyledCopyRight>
      <Container>
        <StyledBetweenAlignFlex>
          <p>© 2023 Ecommerce.</p>
          <select>
            <option value="1">English</option>
            <option value="2">Arabic</option>
          </select>
        </StyledBetweenAlignFlex>
      </Container>
    </StyledCopyRight>
  );
};

export default CopyRight;
