"use client";
import { styled } from "styled-components";
import { StyledFooterListCard } from "./style";

const FooterListCard = ({ listPage }) => {
  return (
    <StyledFooterListCard>
      <ul>
        <li>{listPage}</li>
      </ul>
    </StyledFooterListCard>
  );
};

export default FooterListCard;
