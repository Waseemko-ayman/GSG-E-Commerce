/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "@/components/organism/Container";
import {
  StyledPage,
} from "@/style/common";
import InfoSection from "./Sections/InfoSection";
import Description from "./Sections/Description";
import RelatedProducts from "./Sections/RelatedProducts";

const ProductDetailsPage = () => {

  return (
    <StyledPage>
      <Container>
        <InfoSection />
        <Description />
        <RelatedProducts />
      </Container>
    </StyledPage>
  );
};

export default ProductDetailsPage;
