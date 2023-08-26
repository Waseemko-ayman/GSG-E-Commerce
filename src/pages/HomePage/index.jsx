import Container from "@/components/organism/Container";
import React from "react";
import Landing from "./Sections/LandingSection";
import DealsAndOffers from "./Sections/DealsAndOffersSection";
import HomeAndOutDoor from "./Sections/HomeAndOutDoor";
import RequestSuppliers from "./Sections/RequestSuppliers";
import RecommendedItem from "./Sections/RecommendedItemSection";
import ExtraServices from "./Sections/ExtraServicesSection";

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
      </Container>
    </main>
  );
};

export default HomePage;
