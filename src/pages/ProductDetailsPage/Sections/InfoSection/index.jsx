/* eslint-disable @next/next/no-img-element */
import React from "react";
import { StyledProduct } from "./style";
import PathSection from "@/components/molecules/PathSection";
import {
  StyledAlignFlex,
  StyledBetweenFlex,
  StyledFlex,
  StyledSection,
} from "@/style/common";
import ProductType from "@/components/molecules/ProductType";
import { CUSTOMIZATION, PRICE, TYPE } from "@/mock/ProductType";
import ProductsDetailsCard from "@/components/molecules/ProductDetailsCard";

const InfoSection = ({ params }) => {
  // const myProduct = PRODUCTSLIST_DATA.find((item) => item.id === +params.id);
  return (
    <StyledProduct>
      <PathSection />
      <StyledSection padding="20px 20px 40px">
        <StyledFlex gap="20px">
          <div className="product_images">
            <img src="/assets/T-shirt1.png" alt="product" />
            <StyledBetweenFlex gap="9px">
              <img src="/assets/T-shirt1.png" alt="product" />
              <img src="/assets/T-shirt2.png" alt="product" />
              <img src="/assets/T-shirt3.png" alt="product" />
              <img src="/assets/T-shirt4.png" alt="product" />
              <img src="/assets/T-shirt5.png" alt="product" />
              <img src="/assets/T-shirt6.png" alt="product" />
            </StyledBetweenFlex>
          </div>
          <div className="information">
            <StyledAlignFlex className="check">
              <img src="/assets/check.svg" alt="check" /> In slock
            </StyledAlignFlex>

            <h3>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h3>

            <StyledAlignFlex gap="12px" className="rating">
              <StyledAlignFlex gap="6px">
                <img src="/assets/rating(1).svg" alt="shopping_cart" />
                <span>9.3</span>
              </StyledAlignFlex>

              <StyledAlignFlex gap="9px">
                <img
                  src="/assets/Dot.svg"
                  alt="shopping_cart"
                  className="dot"
                />
                <StyledAlignFlex gap="9px">
                  {" "}
                  <img src="/assets/message.svg" alt="message" /> 32 reviews
                </StyledAlignFlex>
              </StyledAlignFlex>

              <StyledAlignFlex gap="9px">
                <img
                  src="/assets/Dot.svg"
                  alt="shopping_cart"
                  className="dot"
                />
                <StyledAlignFlex gap="9px">
                  {" "}
                  <img
                    src="/assets/shopping_basket.svg"
                    alt="shopping_basket"
                  />{" "}
                  154 sold
                </StyledAlignFlex>
              </StyledAlignFlex>
            </StyledAlignFlex>

            <StyledFlex padding="15px" className="prices">
              <div className="pcs">
                <span>$98.00</span>
                <span>50-100 pcs</span>
              </div>
              <div className="pcs">
                <span>$90.00</span>
                <span>100-700 pcs</span>
              </div>
              <div className="pcs">
                <span>$78.00</span>
                <span>700+ pcs</span>
              </div>
            </StyledFlex>

            <div className="product__type">
              <div className="row">
                {PRICE.map(({ id, title, value }) => (
                  <ProductType key={id} title={title} value={value} />
                ))}
              </div>
              <div className="row">
                {TYPE.map(({ id, title, value }) => (
                  <ProductType key={id} title={title} value={value} />
                ))}
              </div>
              <div className="row">
                {CUSTOMIZATION.map(({ id, title, value }) => (
                  <ProductType key={id} title={title} value={value} />
                ))}
              </div>
            </div>
          </div>

          <ProductsDetailsCard />
        </StyledFlex>
      </StyledSection>
    </StyledProduct>
  );
};

export default InfoSection;
