"use client";
import { StyledFlexCenter } from "@/style/common";
import { styled } from "styled-components";

const StyledNotFound = styled(StyledFlexCenter)`
  
`;

const notFound = () => {
  return (
    <StyledNotFound>
      <div>Not Found! | 404</div>
    </StyledNotFound>
  );
};

export default notFound;
