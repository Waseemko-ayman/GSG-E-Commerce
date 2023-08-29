"use client";
/* eslint-disable @next/next/no-img-element */
import {
  StyledAlignFlex,
  StyledFlexCenter,
  StyledSection,
} from "@/style/common";
import { StyledProductsHeader } from "./style";
import Button from "@/components/atoms/Button";

const ProductsListHeader = () => {
  return (
    <StyledSection padding="10px" margin="0 0 20px">
      <StyledProductsHeader>
        <p>
          12,911 items in <strong>Mobile accessory</strong>
        </p>
        <StyledAlignFlex className="filter">
          <StyledAlignFlex gap="13px" margin="0 16px 0 0">
            <input type="checkbox" />
            <label>Verified only</label>
          </StyledAlignFlex>
          <div className="selects">
            <select>
              <option value="1">Featured</option>
              <option value="2">Category</option>
              <option value="3">Brands</option>
            </select>
          </div>
          
          <StyledAlignFlex margin="0 0 0 10px">
            <StyledFlexCenter as="button">
              <img src="/assets/grid_view.svg" alt="grid_view" />
            </StyledFlexCenter>

            {/* <Button variant="secondary" imageSrc="/assets/grid_view.svg" padding="10px" />
            <Button variant="secondary" imageSrc="/assets/menu.svg" padding="10px" /> */}

            <StyledFlexCenter as="button">
              <img src="/assets/menu.svg" alt="menu" />
            </StyledFlexCenter>
          </StyledAlignFlex>

        </StyledAlignFlex>
      </StyledProductsHeader>
    </StyledSection>
  );
};

export default ProductsListHeader;
