"use client";
import HomeAndOutdoorProductCard from "@/components/molecules/HomeAndOutdoorProductCard";
import { StyledSection } from "@/style/common";
import OutdoorAndConsumerInfo from "@/components/molecules/OutdoorAndConsumerElectInfo";
import { StyledFlexMobile, StyledGridMobile } from "./style";
import Button from "@/components/atoms/Button";
import { HOME_OUTDOOR_DATA } from "@/mock/HomeAndOutdoorData";

const HomeAndOutDoor = () => {
  return (
    <StyledSection margin="20px 0 30px">
      <StyledFlexMobile>
        <OutdoorAndConsumerInfo
          title="Home and outdoor"
          imageSrc="/assets/HomeAndOutdoor.png"
        />
        <StyledGridMobile>
          {HOME_OUTDOOR_DATA.map(({ id, src, title, price }) => (
            <HomeAndOutdoorProductCard
              key={id}
              imageSrc={src}
              productName={title}
              productPrice={price}
            />
          ))}
        </StyledGridMobile>
        <Button
          text="Source now"
          color="primary"
          variant="secondary"
          imageSrc="/assets/arrow_forward.svg"
          gap="5px"
          padding="20px"
          order
        />
      </StyledFlexMobile>
    </StyledSection>
  );
};

export default HomeAndOutDoor;
