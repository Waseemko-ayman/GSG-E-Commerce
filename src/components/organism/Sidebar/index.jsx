"use client";
/* eslint-disable @next/next/no-img-element */
import SidebarFilters from "@/components/molecules/Sidebarfilters";
import {
  SIDEBAR_BRANDS,
  SIDEBAR_CATEGORY,
  SIDEBAR_CONDITION,
  SIDEBAR_FEATURES,
  SIDEBAR_RATING,
} from "@/mock/Sidebar";
import { StyledAlignFlex } from "@/style/common";
import MultiRangeSlider from "../MultiRangeSlider";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { StyledFilterContent } from "./style";

const Sidebar = () => {
  return (
    <StyledFilterContent>
      <SidebarFilters title="Category">
        {SIDEBAR_CATEGORY.map(({ id, type }) => (
          <p key={id} className="category">{type}</p>
        ))}
        <p>See all</p>
      </SidebarFilters>

      <SidebarFilters title="Brands">
        {SIDEBAR_BRANDS.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <input type="checkbox" />
            <label htmlFor="condition">{type}</label>
          </StyledAlignFlex>
        ))}
        <p>See all</p>
      </SidebarFilters>

      <SidebarFilters title="Features">
        {SIDEBAR_FEATURES.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <input type="checkbox" />
            <label htmlFor="condition">{type}</label>
          </StyledAlignFlex>
        ))}
        <p>See all</p>
      </SidebarFilters>

      <SidebarFilters title="Price range">
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        <StyledAlignFlex gap="9px" margin="0 0 8px">
          <div className="min__max">
            <span>Min</span>
            <Input type="number" placeholder="0" imageHidden removeArrow />
          </div>
          <div className="min__max">
            <span>Max</span>
            <Input type="number" placeholder="999999" imageHidden removeArrow />
          </div>
        </StyledAlignFlex>
        <Button
          text="Apply"
          color="primary"
          variant="secondary"
          borderColor="gray"
          width="100%"
          padding="10px"
          imageHidden
        />
      </SidebarFilters>

      <SidebarFilters title="Condition">
        {SIDEBAR_CONDITION.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <input type="radio" />
            <label htmlFor="condition">{type}</label>
          </StyledAlignFlex>
        ))}
        <p>See all</p>
      </SidebarFilters>

      <SidebarFilters title="Ratings">
        {SIDEBAR_RATING.map(({ id, src }) => (
          <StyledAlignFlex gap="10px" margin="0 0 15px 0" key={id}>
            <input type="checkbox" />
            <img src={src} alt="rate" />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>
    </StyledFilterContent>
  );
};

export default Sidebar;
