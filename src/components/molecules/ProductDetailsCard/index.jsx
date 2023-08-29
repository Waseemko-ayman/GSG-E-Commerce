"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/atoms/Button";
import {
  StyledAlignFlex,
  StyledFlexCenter,
  StyledSection,
} from "@/style/common";
import { StyledDetailsCard } from "./style";

const ProductsDetailsCard = () => {
  return (
    <StyledDetailsCard>
      <StyledSection padding="20px 10px" className="card">
        <StyledAlignFlex gap="11px" className="title">
          <StyledFlexCenter className="avatar">R</StyledFlexCenter>
          <div className="name">
            <span>Supplier</span>
            <span>Guanjoi Trading LLC</span>
          </div>
        </StyledAlignFlex>

        <div className="info">
          <StyledAlignFlex gap="18px" className="row">
            <img src="/assets/germany-flag.png" alt="germany flag" />
            <p>Germany, Berlin</p>
          </StyledAlignFlex>
          <StyledAlignFlex gap="18px" className="row">
            <img src="/assets/verified_user.svg" alt="verified user" />
            <p>Verified Seller</p>
          </StyledAlignFlex>
          <StyledAlignFlex gap="18px" className="row">
            <img src="/assets/language.svg" alt="language" />
            <p>Worldwide shipping</p>
          </StyledAlignFlex>
        </div>

        <Button
          text="Send inguiry"
          color="secondary"
          variant="primary"
          width="100%"
          padding="10px 0"
          imageHidden
        />
        <Button
          text="Seller’s profile"
          color="primary"
          variant="secondary"
          borderColor="gray"
          width="100%"
          padding="10px 0"
          imageHidden
        />
      </StyledSection>

      <StyledFlexCenter gap="8px" className="save_later">
        <img src="/assets/favorite_border.svg" alt="favorite_border" />
        <p>Save for later</p>
      </StyledFlexCenter>
    </StyledDetailsCard>
  );
};

export default ProductsDetailsCard;
