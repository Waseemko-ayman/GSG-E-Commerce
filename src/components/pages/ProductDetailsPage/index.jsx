"use client";
/* eslint-disable @next/next/no-img-element */
import Container from "@/components/organism/Container";
import {
  StyledPage,
} from "@/style/common";
import InfoSection from "./Sections/InfoSection";
import Description from "./Sections/Description";
import RelatedProducts from "./Sections/RelatedProducts";
import Advertisement from "./Sections/Advertisement";

const ProductDetailsPage = () => {

  return (
    <StyledPage>
      <Container>
        <InfoSection />
        <Description />
        <RelatedProducts />
        <Advertisement />
      </Container>
    </StyledPage>
  );
};

export default ProductDetailsPage;
