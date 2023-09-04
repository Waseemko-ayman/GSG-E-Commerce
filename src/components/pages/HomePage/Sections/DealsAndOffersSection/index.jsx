"use client";
import OffersDateCards from "@/components/atoms/DealsAndOffersDateCard";
import { StyledBetweenFlex, StyledFlex, StyledGrid180, StyledSection } from "@/style/common";
import OffersProductCard from "@/components/atoms/OffersProductCard";
import { StyledBetween, StyledInfoOffers } from "./style.js";
import { OFFERS_PRODUCT_DATA } from "@/mock/offersProductData.js";

const DealsAndOffers = () => {
  return (
    <StyledSection margin="20px 0 30px">
      <StyledBetween>
        <StyledInfoOffers>
          <div>
            <h1>Deals and offers</h1>
            <p>Hygiene equipments</p>
          </div>
          <StyledFlex className="date">
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
      </StyledBetween>
    </StyledSection>
  );
};

export default DealsAndOffers;
