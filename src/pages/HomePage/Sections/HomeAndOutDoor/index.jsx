"use client";
import HomeAndOutdoorProductCard from "@/components/molecules/HomeAndOutdoorProductCard";
import { StyledFlex, StyledGrid, StyledSection } from "@/style/common";
import OutdoorAndConsumerInfo from "@/components/molecules/OutdoorAndConsumerElectInfo";
import { HOME_OUTDOOR_DATA } from "@/mock/HomeAndOutdoorData";

const HomeAndOutDoor = () => {
  return (
    <StyledSection margin="20px 0 30px">
      <StyledFlex>
        <OutdoorAndConsumerInfo
          title="Home and outdoor"
          imageSrc="/assets/HomeAndOutdoor.png"
        />
        <StyledGrid>
          {HOME_OUTDOOR_DATA.map(({ id, src, title, price }) => (
            <HomeAndOutdoorProductCard
              key={id}
              imageSrc={src}
              productName={title}
              productPrice={price}
            />
          ))}
        </StyledGrid>
      </StyledFlex>
    </StyledSection>
  );
};

export default HomeAndOutDoor;
