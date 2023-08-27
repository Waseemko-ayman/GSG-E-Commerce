"use client";
import { StyledFlex, StyledGrid, StyledSection } from "@/style/common";
import OutdoorAndConsumerInfo from "@/components/molecules/OutdoorAndConsumerElectInfo";
import HomeAndOutdoorProductCard from "@/components/molecules/HomeAndOutdoorProductCard";
import { CONSUMER_ELECTRONICS_DATA } from "@/mock/ConsumerElectronicsData";

const ConsumerElectronics = () => {
  return (
    <StyledSection>
      <StyledFlex>
        <OutdoorAndConsumerInfo
          title="Consumer electronics and gadgets"
          imageSrc="/assets/ConsumerElectronics.png"
        />
        <StyledGrid>
          {CONSUMER_ELECTRONICS_DATA.map(({ id, src, title, price }) => (
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

export default ConsumerElectronics;
