"use client"
import Logo from "@/components/atoms/Logo";
import { styled } from "styled-components";

const StyledLoading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 70px;
    height: 70px;
  }

  h1 {
    color: #8cb7f5;
    font-size: 50px;
  }

  @media (max-width: 427px) {
    img {
      width: 50px;
      height: 50px;
    }
    h1 {
      font-size: 30px;
    }
  }
`;

const loading = () => {
  return (
    <StyledLoading>
      <Logo />
    </StyledLoading>
  );
};

export default loading;
