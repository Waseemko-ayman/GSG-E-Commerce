"use client";
/* eslint-disable @next/next/no-img-element */
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
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
import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const formSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegex, "Enter Correct Email")
    .required("Email is required"),

  password: Yup.string().required("Password is required"),

  checked: Yup.boolean().oneOf(
    [true, false],
    "You must agree to the terms and conditions"
  ),
});

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const { login, isLoading } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    login(data);
  };

  const hadnleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <StyledFlexCenter>
      <StyledLoginForm padding="30px">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="box">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              placeholder="Email or phone"
              name="email"
              imageHidden
              register={register}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="box">
            <StyledBetweenAlignFlex>
              <label htmlFor="password">Password</label>
              <Link href="#">Forgot Password</Link>
            </StyledBetweenAlignFlex>
            <Input
              type={showPass ? "text" : "password"}
              placeholder="Type here"
              name="password"
              leftImageHidden
              rightImage={showPass ? "/assets/eye.svg" : "/assets/eye-off.svg"}
              onClick={hadnleShowPass}
              register={register}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <div className="remmember">
            <Checkbox text="Remember me" name="checked" register={register} />
          </div>
          <Button
            text={isLoading ? "Loading..." : "Log in"}
            type="submit"
            color="secondary"
            variant="primary"
            width="100%"
            padding="10px 0"
            imageHidden
          />
        </form>
        <div className="or"></div>
        <StyledFlexColumn className="links">
          <Link href="https://google.com" target="_blank">
            <img src="/assets/googleIcon.png" alt="google" />
            <span>Continue with Google</span>
          </Link>
          <Link href="https://facebook.com" target="_blank">
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
