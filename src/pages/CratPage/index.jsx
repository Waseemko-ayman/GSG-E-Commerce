"use client";
import Container from "@/components/organism/Container";
import { StyledPage } from "@/style/common";
import MyCart from "./Sections/MyCart";
import Services from "./Sections/Services";
import Advertisement from "../ProductDetailsPage/Sections/Advertisement";
import SaveProducts from "./Sections/SaveProducts";
import { styled } from "styled-components";

const StyledH3 = styled.h3`
  margin: 20px 0;

  @media (max-width: 426px) {
    padding: 0 10px;
  }
`;

const CartPage = () => {
  return (
    <StyledPage>
      <Container>
        <StyledH3>My Cart (3)</StyledH3>
        <MyCart />
        <Services />
        <SaveProducts />
        <Advertisement />
      </Container>
    </StyledPage>
  );
};

export default CartPage;
