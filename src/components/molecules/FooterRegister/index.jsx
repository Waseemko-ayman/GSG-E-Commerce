"use client";
/* eslint-disable @next/next/no-img-element */
import Container from "@/components/organism/Container";
import { CREDIT_SRC } from "@/mock/CreditImage";
import {
  StyledAlignFlex,
  StyledBetweenAlignFlex,
  StyledFlexCenter,
} from "@/style/common";
import Link from "next/link";
import { StyledFooterRegister } from "./style";

const FooterRegister = () => {
  return (
    <StyledFooterRegister as="footer">
      <Container>
        <StyledBetweenAlignFlex>
          <StyledAlignFlex gap="10px">
            {CREDIT_SRC.map(({ id, src }) => (
              <StyledFlexCenter className="image" key={id}>
                <img src={src} alt="credit" />
              </StyledFlexCenter>
            ))}
          </StyledAlignFlex>
          <StyledAlignFlex gap="30px" as="ul">
            <li>
              <Link href="#">Support</Link>
            </li>
            <li>
              <Link href="#">Privacy & Cookies</Link>
            </li>
            <li>
              <Link href="#">Accessibility</Link>
            </li>
          </StyledAlignFlex>
        </StyledBetweenAlignFlex>
      </Container>
    </StyledFooterRegister>
  );
};

export default FooterRegister;
