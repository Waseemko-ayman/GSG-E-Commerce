"use client";
import OffersDateCards from "@/components/atoms/DealsAndOffersDateCard";
import { StyledBetweenFlex, StyledFlex, StyledSection } from "@/style/common";
import OffersProductCard from "@/components/atoms/OffersProductCard";
import { StyledInfoOffers } from "./style.js";
import SmartWatche from "../../../../../public/assets/offersProduct1.png";
import Laptops from "../../../../../public/assets/offersProduct2.png";
import Cameras from "../../../../../public/assets/offersProduct3.png";
import Headphones from "../../../../../public/assets/offersProduct4.png";
import CanonCamreras from "../../../../../public/assets/offersProduct5.png";

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
          {/* {OFFERS_PRODUCT_DATA.map(({ id, src, name, alt, saleRate }) => {
            <OffersProductCard
              key={id}
              imageSrc={src}
              productName={name}
              imageAlt={alt}
              productSale={saleRate}
            />;
          })} */}
          <OffersProductCard
            imageSrc={SmartWatche}
            productName="Smart watches"
            imageAlt="Smart watches"
            productSale="-25%"
          />
          <OffersProductCard
            imageSrc={Laptops}
            productName="Laptops"
            imageAlt="Laptops"
            productSale="-15%"
          />
          <OffersProductCard
            imageSrc={Cameras}
            productName="GoPro cameras"
            imageAlt="GoPro cameras"
            productSale="-40%"
          />
          <OffersProductCard
            imageSrc={Headphones}
            productName="Headphones"
            imageAlt="Headphones"
            productSale="-25%"
          />
          <OffersProductCard
            imageSrc={CanonCamreras}
            productName="Canon camreras"
            imageAlt="CanonCamreras"
            productSale="-25%"
          />
        </StyledFlex>
      </StyledBetweenFlex>
    </StyledSection>
  );
};

export default DealsAndOffers;
