"use client";
/* eslint-disable @next/next/no-img-element */
import { StyledSuppliersRegoinCard } from "./style";

const SuppliersregoinCard = ({ imageSrc, countryName, countryEmail }) => {
  return (
    <StyledSuppliersRegoinCard gap="11px">
      <img src={imageSrc} alt="Flag" />
      <div className="info">
        <p>{countryName}</p>
        <span>{countryEmail}</span>
      </div>
    </StyledSuppliersRegoinCard>
  );
};

export default SuppliersregoinCard;
