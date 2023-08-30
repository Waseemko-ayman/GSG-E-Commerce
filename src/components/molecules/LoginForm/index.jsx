"use client";
/* eslint-disable @next/next/no-img-element */

import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import HaveAccount from "@/components/atoms/HaveAccount";
import Input from "@/components/atoms/Input";
import {
  StyledBetweenAlignFlex,
  StyledFlexCenter,
  StyledFlexColumn,
} from "@/style/common";
import Link from "next/link";
import { StyledLoginForm } from "./style";


const LoginForm = () => {
  return (
    <StyledFlexCenter>
      <StyledLoginForm padding="30px">
        <h1>Sign in</h1>
        <form>
          <div className="box">
            <label htmlFor="username">Username</label>
            <Input type="text" placeholder="Email or phone" imageHidden />
            {/* <p className="error">Must you write your name</p> */}
          </div>
          <div className="box">
            <StyledBetweenAlignFlex>
              <label htmlFor="username">Password</label>
              <Link href="#">Forgot Password</Link>
            </StyledBetweenAlignFlex>
            <Input type="text" placeholder="Type here" imageHidden />
            {/* <p className="error">Must you write your name</p> */}
          </div>
          <Checkbox text="Remember me" />
          <Button
            type="submit"
            text="Log in"
            color="secondary"
            variant="primary"
            width="100%"
            padding="10px 0"
            imageHidden
          />
        </form>
        <div className="or"></div>
        {/* <Button
            text="Continue with Google"
            color="gray-800"
            variant="secondary"
            borderColor="gray"
            imageSrc="/assets/googleIcon.png"
            width="100%"
            padding="10px 0"
            gap="100px"
          />
          <Button
            text="Continue with Facebook"
            color="secondary"
            variant="facebook"
            borderColor="gray"
            imageSrc="/assets/facebook.png"
            width="100%"
            padding="10px 0"
          /> */}
        <StyledFlexColumn className="links">
          <Link href="https://google.com" target="_blank">
            <img src="/assets/googleIcon.png" alt="google" />
            <span>Continue with Google</span>
          </Link>
          <Link href="https://google.com" target="_blank">
            <img src="/assets/facebook.png" alt="google" />
            <span>Continue with Facebook</span>
          </Link>
        </StyledFlexColumn>
        <HaveAccount
          question="Don’t have an account?"
          path="/Signup"
          linkText="Register now"
        />
      </StyledLoginForm>
    </StyledFlexCenter>
  );
};

export default LoginForm;
