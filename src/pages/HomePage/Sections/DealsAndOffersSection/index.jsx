"use client";
import OffersDateCards from "@/components/atoms/DealsAndOffersDateCard";
import { StyledBetweenFlex, StyledFlex, StyledSection } from "@/style/common";
import OffersProductCard from "@/components/atoms/OffersProductCard";
import { StyledInfoOffers } from "./style.js";
import { OFFERS_PRODUCT_DATA } from "@/mock/offersProductData.js";

const DealsAndOffers = () => {
  return (
    <StyledSection>
      <StyledBetweenFlex>
        <StyledInfoOffers>
          <h1>Deals and offers</h1>
          <p>Hygiene equipments</p>
          <StyledFlex>
            <OffersDateCards dateNumber="04" dateName="Days" />
            <OffersDateCards dateNumber="13" dateName="Hour" />
            <OffersDateCards dateNumber="34" dateName="Min" />
            <OffersDateCards dateNumber="56" dateName="Sec" />
          </StyledFlex>
        </StyledInfoOffers>
        <StyledFlex>
          {OFFERS_PRODUCT_DATA.map(({ id, src, name, alt, saleRate }) => (
            <OffersProductCard
              key={id}
              imageSrc={src}
              productName={name}
              imageAlt={alt}
              productSale={saleRate}
            />
          ))}
        </StyledFlex>
      </StyledBetweenFlex>
    </StyledSection>
  );
};

export default DealsAndOffers;
