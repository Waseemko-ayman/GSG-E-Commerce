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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAction } from "@/redux/slices/products";

const ProductDetailsPage = ({ params }) => {

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  console.log(product)

  useEffect(() => {
    dispatch(getSingleProductAction(+params?.id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledPage>
      <Container>
        <InfoSection product={product} />
        <Description />
        <RelatedProducts />
        <Advertisement />
      </Container>
    </StyledPage>
  );
};

export default ProductDetailsPage;
