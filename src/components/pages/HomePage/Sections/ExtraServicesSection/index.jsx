"use client"
import ExtraServicesCard from "@/components/molecules/ExrtaServicesCard";
import { EXTRA_SERVICES_DATA } from "@/mock/ExtraServices";
import { StyledGrid250, StyledReExSupp } from "@/style/common.js";

const ExtraServices = () => {
  return (
    <StyledReExSupp>
      <h2>Our extra services</h2>
      <StyledGrid250 gap="20px">
        {EXTRA_SERVICES_DATA.map(({ id, src, alt, title, icon }) => (
          <ExtraServicesCard key={id} imageSrc={src} imageAlt={alt} title={title} iconSrc={icon} />
        ))}
      </StyledGrid250>
    </StyledReExSupp>
  );
};

export default ExtraServices;
