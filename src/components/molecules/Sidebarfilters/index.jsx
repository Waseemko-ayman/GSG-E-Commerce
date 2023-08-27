"use client";
/* eslint-disable @next/next/no-img-element */
import { StyledBetweenFlex } from "@/style/common";
import { useState } from "react";
import { styled } from "styled-components";

const StyledSidbarFilters = styled.div`
  border-top: 1px solid var(--gray-300-color);
  padding: 0 2px 10px 0;
  
  .filter_section {
    padding: 12px 0px;
    cursor: pointer;
  }
`;

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
