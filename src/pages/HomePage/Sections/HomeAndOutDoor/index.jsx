"use client";
import HomeAndOutdoorProductCard from "@/components/molecules/HomeAndOutdoorProductCard";
import { StyledFlex, StyledGrid, StyledSection } from "@/style/common";
import OutdoorAndConsumerInfo from "@/components/molecules/OutdoorAndConsumerElectInfo";
import Button from "@/components/atoms/Button";
import { styled } from "styled-components";
import { HOME_OUTDOOR_DATA } from "@/mock/HomeAndOutdoorData";

// const StyledHomeAndOutDoor = styled.div``;

const HomeAndOutDoor = () => {
  return (
    <StyledSection>
      <StyledFlex>
        <OutdoorAndConsumerInfo
          title="Home and outdoor"
          imageSrc="/assets/HomeAndOutdoor.png"
        />
        <StyledGrid>
          {/* {HOME_OUTDOOR_DATA.map(({ id, src, title, price }) => (
            <HomeAndOutdoorProductCard
              key={id}
              imageSrc={src}
              productName={title}
              productPrice={price}
            />
          ))} */}
        </StyledGrid>
      </StyledFlex>
    </StyledSection>
  );
};

export default HomeAndOutDoor;
