"use client";
/* eslint-disable @next/next/no-img-element */
import {
  StyledAlignFlex,
  StyledFlexCenter,
  StyledSection,
} from "@/style/common";
import { StyledProductsHeader } from "./style";

const ProductsListHeader = ({ handleClickGrid, handleClickRow }) => {
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
            <StyledFlexCenter as="button" onClick={handleClickGrid}>
              <img src="/assets/grid_view.svg" alt="grid_view" />
            </StyledFlexCenter>

            <StyledFlexCenter as="button" onClick={handleClickRow}>
              <img src="/assets/menu.svg" alt="menu" />
            </StyledFlexCenter>
          </StyledAlignFlex>

        </StyledAlignFlex>
      </StyledProductsHeader>
    </StyledSection>
  );
};

export default ProductsListHeader;
