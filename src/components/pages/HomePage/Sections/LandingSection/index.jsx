"use client"

import LandingList from "@/components/molecules/landingList";
import LandingCard from "@/components/molecules/landingCard";
import LandingPaper from "@/components/molecules/landingPaper";
import { StyledLanding } from "./style.js";

const Landing = () => {
  return (
    <StyledLanding>
      <LandingList />
      <LandingCard />
      <LandingPaper />
    </StyledLanding>
  );
};

export default Landing;
