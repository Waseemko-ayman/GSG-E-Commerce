"use client";
/* eslint-disable @next/next/no-img-element */
import { StyledBetweenFlex } from "@/style/common";
import { useState } from "react";
import { StyledSidbarFilters } from "./style";



const SidebarFilters = ({ title, children }) => {

  const [showChildren, setShowChildren] = useState(false);

  const toggleShowChildren = () => {
    setShowChildren(!showChildren)
  }

  return (
    <StyledSidbarFilters>
      <StyledBetweenFlex onClick={toggleShowChildren} className="filter_section">
        <h4>{title}</h4>
        <img src="/assets/expand_less.svg" alt="expand_less" />
      </StyledBetweenFlex>
      {showChildren && children}
    </StyledSidbarFilters>
  );
};

export default SidebarFilters;
