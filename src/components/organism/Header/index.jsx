"use client"
import Logo from "@/components/atoms/Logo";
import Container from "../Container";
import LinksList from "@/components/atoms/LinksList";
import Search from "@/components/atoms/Search";
import { StyledHeader } from "./style.js";
import { StyledBetweenAlignFlex } from "@/style/common";

const Header = ({ show = true }) => {
  return (
    <StyledHeader as="header">
      <Container>
        <StyledBetweenAlignFlex>
          <Logo />
          {show && <Search />}
          <LinksList />
        </StyledBetweenAlignFlex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
