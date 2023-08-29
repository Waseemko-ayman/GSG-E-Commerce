"use client";
import Container from "@/components/organism/Container";
import { StyledPage } from "@/style/common";
import MyCart from "./Sections/MyCart";
import Services from "./Sections/Services";
import Advertisement from "../ProductDetailsPage/Sections/Advertisement";
import SaveProducts from "./Sections/SaveProducts";

const CartPage = () => {
  return (
    <StyledPage>
      <Container>
        <h3 style={{ margin: "20px 0" }}>My Cart (3)</h3>
        <MyCart />
        <Services />
        <SaveProducts />
        <Advertisement />
      </Container>
    </StyledPage>
  );
};

export default CartPage;
