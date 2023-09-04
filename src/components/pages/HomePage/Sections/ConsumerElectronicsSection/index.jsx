"use client";
import { StyledSection } from "@/style/common";
import OutdoorAndConsumerInfo from "@/components/molecules/OutdoorAndConsumerElectInfo";
import HomeAndOutdoorProductCard from "@/components/molecules/HomeAndOutdoorProductCard";
import { CONSUMER_ELECTRONICS_DATA } from "@/mock/ConsumerElectronicsData";
import { StyledFlexMobile, StyledGridMobile } from "../HomeAndOutDoor/style";
import Button from "@/components/atoms/Button";

const ConsumerElectronics = () => {
  return (
    <StyledSection margin="20px 0 30px">
      <StyledFlexMobile>
        <OutdoorAndConsumerInfo
          title="Consumer electronics and gadgets"
          imageSrc="/assets/ConsumerElectronics.png"
        />
        <StyledGridMobile>
          {CONSUMER_ELECTRONICS_DATA.map(({ id, src, title, price }) => (
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

export default ConsumerElectronics;
