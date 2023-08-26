import Container from "@/components/organism/Container";
import React from "react";
import Landing from "./Sections/LandingSection";
import DealsAndOffers from "./Sections/DealsAndOffersSection";
import HomeAndOutDoor from "./Sections/HomeAndOutDoor";
import RequestSuppliers from "./Sections/RequestSuppliers";
import RecommendedItem from "./Sections/RecommendedItemSection";

const HomePage = () => {
  return (
    <main>
      <Container>
        <Landing />
        <DealsAndOffers />
        <HomeAndOutDoor />
        <RequestSuppliers />
        <RecommendedItem />
      </Container>
    </main>
  );
};

export default HomePage;
