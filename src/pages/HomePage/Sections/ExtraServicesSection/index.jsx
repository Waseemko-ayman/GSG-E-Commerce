"use client"
import ExtraServicesCard from "@/components/molecules/ExrtaServicesCard";
import { EXTRA_SERVICES_DATA } from "@/mock/ExtraServices";
import { StyledExtraServices } from "./style.js";
import { StyledGrid250 } from "@/style/common.js";

const ExtraServices = () => {
  return (
    <StyledExtraServices>
      <h2>Our extra services</h2>
      <StyledGrid250 gap="20px">
        {EXTRA_SERVICES_DATA.map(({ id, src, alt, title, icon }) => (
          <ExtraServicesCard key={id} imageSrc={src} imageAlt={alt} title={title} iconSrc={icon} />
        ))}
      </StyledGrid250>
    </StyledExtraServices>
  );
};

export default ExtraServices;
