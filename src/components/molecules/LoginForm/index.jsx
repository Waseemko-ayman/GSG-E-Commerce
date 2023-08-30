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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const formSchema = Yup.object({
  username: Yup.string().required("Username is required"),

  email: Yup.string()
    .matches(emailRegex, "Enter Correct Email")
    .required("Email is required"),

  phone: Yup.number().positive().integer().required("Phone is requied"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(15, "Password must be at least 15 characters long")
    // .length(10)
    .matches(
      RegExp("(.*[a-z].*)"),
      "Password must contain at least one Lowercase letter"
    )
    .matches(
      RegExp("(.*[A-Z].*)"),
      "Password must contain at least one Uppercase letter"
    )
    .matches(RegExp("(.*\\d.*)"), "Password must contain at least one Number ")
    .matches(
      RegExp('[!@#$%^&*(),.?":{}|<>]'),
      "Password must contain at least one Special character"
    ),

  checked: Yup.boolean().oneOf(
    [true, false],
    "You must agree to the terms and conditions"
  ),
});

const LoginForm = () => {
  const onSubmit = async (data) => {
    // signup(data);
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledFlexCenter>
      <StyledLoginForm padding="30px">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="box">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              placeholder="Email or phone"
              name="username"
              imageHidden
              register={register}
            />
            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>
          <div className="box">
            <StyledBetweenAlignFlex>
              <label htmlFor="password">Password</label>
              <Link href="#">Forgot Password</Link>
            </StyledBetweenAlignFlex>
            <Input
              type="password"
              placeholder="Type here"
              name="password"
              imageHidden
              register={register}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <div className="remmember">
            <Checkbox text="Remember me" name="checked" register={register} />
            {errors.checked && (
              <p className="error">{errors.checked.message}</p>
            )}
          </div>
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
