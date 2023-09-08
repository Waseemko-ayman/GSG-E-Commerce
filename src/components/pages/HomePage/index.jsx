"use client";
import Container from "@/components/organism/Container";
import React from "react";
import Landing from "./Sections/LandingSection";
import DealsAndOffers from "./Sections/DealsAndOffersSection";
import HomeAndOutDoor from "./Sections/HomeAndOutDoor";
import RequestSuppliers from "./Sections/RequestSuppliers";
import RecommendedItem from "./Sections/RecommendedItemSection";
import ExtraServices from "./Sections/ExtraServicesSection";
import SuppliersRegoin from "./Sections/SuppliersByRegion";
import Subscribe from "@/components/organism/SubscribeSection";
import ConsumerElectronics from "./Sections/ConsumerElectronicsSection";
import { StyledPage } from "@/style/common";
import MainLayout from "@/components/organism/MainLayout";

const HomePage = () => {
  return (
    <StyledPage as="main">
        <Container>
          <Landing />
          <DealsAndOffers />
          <HomeAndOutDoor />
          <ConsumerElectronics />
          <RequestSuppliers />
          <RecommendedItem />
          <ExtraServices />
          <SuppliersRegoin />
        </Container>
        <Subscribe />
    </StyledPage>
  );
};

export default HomePage;
