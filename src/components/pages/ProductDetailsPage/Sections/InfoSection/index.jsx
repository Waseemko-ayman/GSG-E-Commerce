"use client"
/* eslint-disable @next/next/no-img-element */
import { StyledProduct } from "./style";
import PathSection from "@/components/molecules/PathSection";
import {
  StyledAlignFlex,
  StyledBetweenFlex,
  StyledFlex,
  StyledFlexCenter,
  StyledSection,
} from "@/style/common";
import ProductType from "@/components/molecules/ProductType";
import { CUSTOMIZATION, PRICE, TYPE } from "@/mock/ProductType";
import ProductsDetailsCard from "@/components/molecules/ProductDetailsCard";


const InfoSection = ({ product }) => {
  return (
    <StyledProduct>
      <PathSection />
      <StyledSection padding="20px 20px 40px" className="styled_section">
        <StyledFlex gap="20px">
          <div className="product_images">
            <StyledFlexCenter className="image">
              <img src={`/${product?.image}`} alt="product" />
            </StyledFlexCenter>
            <StyledBetweenFlex gap="9px">
              <img src={`/${product?.image}`} alt={product?.title} />
              <img src={`/${product?.image}`} alt={product?.title} />
              <img src={`/${product?.image}`} alt={product?.title} />
              <img src={`/${product?.image}`} alt={product?.title} />
              <img src={`/${product?.image}`} alt={product?.title} />
              <img src={`/${product?.image}`} alt={product?.title} />
            </StyledBetweenFlex>
          </div>

          <div className="information">
            <StyledAlignFlex className="check">
              <img src="/assets/check.svg" alt="check" /> In slock
            </StyledAlignFlex>

            <h3>{product?.title}</h3>

            <StyledAlignFlex gap="12px" className="rating">
              <StyledAlignFlex gap="6px">
                <img src="/assets/rating(1).svg" alt="shopping_cart" />
                <span>{product?.evaluation}</span>
              </StyledAlignFlex>

              <StyledAlignFlex gap="9px">
                <img
                  src="/assets/Dot.svg"
                  alt="shopping_cart"
                  className="dot"
                />
                <StyledAlignFlex gap="9px">
                  <img src="/assets/message.svg" alt="message" /> 
                  <p>32 reviews</p>
                </StyledAlignFlex>
              </StyledAlignFlex>

              <StyledAlignFlex gap="9px">
                <img
                  src="/assets/Dot.svg"
                  alt="shopping_cart"
                  className="dot"
                />
                <StyledAlignFlex gap="9px">
                  <img
                    src="/assets/shopping_basket.svg"
                    alt="shopping_basket"
                  />{" "}
                  <p>{product?.orders} sold</p>
                </StyledAlignFlex>
              </StyledAlignFlex>
            </StyledAlignFlex>

            <StyledFlex padding="15px" className="prices">
              <div className="pcs">
                <span>{product?.price}.00</span>
                <span>50-100 pcs</span>
              </div>
              <div className="pcs">
                {/* <span>$90.00</span> */}
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
