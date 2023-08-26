import Container from "@/components/organism/Container";
import React from "react";
import Landing from "./Sections/LandingSection";
import DealsAndOffers from "./Sections/DealsAndOffersSection";
import HomeAndOutDoor from "./Sections/HomeAndOutDoor";
import RequestSuppliers from "./Sections/RequestSuppliers";
import RecommendedItem from "./Sections/RecommendedItemSection";
import ExtraServices from "./Sections/ExtraServicesSection";
import SuppliersRegoin from "./Sections/SuppliersByRegion";

const HomePage = () => {
  return (
    <main>
      <Container>
        <Landing />
        <DealsAndOffers />
        <HomeAndOutDoor />
        <RequestSuppliers />
        <RecommendedItem />
        <ExtraServices />
        <SuppliersRegoin />
      </Container>
    </main>
  );
};

export default HomePage;
