import React from "react";
import "./style.css";
import Logo from "@/components/atoms/Logo";
import Container from "../Container";
import LinksList from "@/components/atoms/LinksList";
import Search from "@/components/atoms/Search";

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <Logo />
          <Search />
          <LinksList />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
