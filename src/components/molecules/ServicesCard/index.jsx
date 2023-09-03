/* eslint-disable @next/next/no-img-element */
import { StyledFlexCenter } from "@/style/common";
import { StyledServicesCard } from "./styel";

const ServicesCard = ({ imageSrc, titleService, decription }) => {
  return (
    <StyledServicesCard>
      <StyledFlexCenter gap="10px">
        <StyledFlexCenter className="image">
          <img src={imageSrc} alt="services" />
        </StyledFlexCenter>
        <div className="text">
          <h3>{titleService}</h3>
          <p>{decription}</p>
        </div>
      </StyledFlexCenter>
    </StyledServicesCard>
  );
};

export default ServicesCard;
