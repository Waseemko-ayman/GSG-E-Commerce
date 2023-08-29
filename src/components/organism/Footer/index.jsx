"use client";
/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/atoms/Logo";
import { SOCIAL_MEDIA } from "@/mock/socialMedia";
import { StyledBetweenFlex, StyledFlex } from "@/style/common";
import Container from "../Container";
import FooterListCard from "@/components/atoms/FooterListCard";
import {
  ABOUT_LIST,
  FOR_USERS_LIST,
  GET_APP_LIST,
  INFORMATION_LIST,
  PARTNERSHIP_LIST,
} from "@/mock/FooterLists";
import { StyledFooter, StyledFooterContent } from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContent>
          <div className="info">
            <Logo />
            <p>
              Best information about the company gies here but now lorem ipsum is
            </p>
            <StyledFlex gap="10px">
              {SOCIAL_MEDIA.map(({ id, src }) => (
                <img key={id} src={src} alt="social media" />
              ))}
            </StyledFlex>
          </div>
          <StyledBetweenFlex className="lists">
            <div>
              <h3>About</h3>
              {ABOUT_LIST.map(({ id, pageLink }) => (
                <FooterListCard key={id} listPage={pageLink} />
              ))}
            </div>
            <div>
              <h3>Partnership</h3>
              {PARTNERSHIP_LIST.map(({ id, pageLink }) => (
                <FooterListCard key={id} listPage={pageLink} />
              ))}
            </div>
            <div>
              <h3>Information</h3>
              {INFORMATION_LIST.map(({ id, pageLink }) => (
                <FooterListCard key={id} listPage={pageLink} />
              ))}
            </div>
            <div>
              <h3>For users</h3>
              {FOR_USERS_LIST.map(({ id, pageLink }) => (
                <FooterListCard key={id} listPage={pageLink} />
              ))}
            </div>
            <div>
              <h3>For users</h3>
              {GET_APP_LIST.map(({ id, src }) => (
                <img key={id} src={src} alt="store" />
              ))}
            </div>
          </StyledBetweenFlex>
        </StyledFooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
