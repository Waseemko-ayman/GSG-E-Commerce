"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Button from "@/components/atoms/Button";
import HaveAccount from "@/components/atoms/HaveAccount";
import Input from "@/components/atoms/Input";
import { StyledAlignFlex, StyledFlexCenter, StyledPage } from "@/style/common";
import { StyledRegister } from "./style";
import Checkbox from "@/components/atoms/Checkbox";
import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const formSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  surname: Yup.string().required("Surname is required"),

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

  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),

  checked: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const SignUpPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  const { signup, isLoading } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    signup(data);
    reset();
  };

  const hadnleShowPass = () => {
    setShowPass(!showPass);
  };

  const hadnleShowRePass = () => {
    setShowRePass(!showRePass);
  };

  return (
    <StyledPage>
      <StyledFlexCenter>
        <StyledRegister padding="30px">
          <h1>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledAlignFlex gap="9px" className="box">
              <div>
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  placeholder="Type here"
                  name="name"
                  imageHidden
                  register={register}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="surname">Surname</label>
                <Input
                  type="text"
                  placeholder="Type here"
                  name="surname"
                  imageHidden
                  register={register}
                />
                {errors.surname && (
                  <p className="error">{errors.surname.message}</p>
                )}
              </div>
            </StyledAlignFlex>
            <div className="box">
              <label htmlFor="email">Your e-mail</label>
              <Input
                type="email"
                placeholder="example@mail.com"
                name="email"
                imageHidden
                register={register}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="box">
              <label htmlFor="phone">Phone</label>
              <StyledAlignFlex>
                <div className="selects">
                  <select>
                    <option value="1" defaultValue>
                      PL +970
                    </option>
                    <option value="2">EG +20</option>
                    <option value="3">UZ +998</option>
                  </select>
                </div>
                <Input
                  type="number"
                  placeholder="00-000-00-00"
                  name="phone"
                  imageHidden
                  removeArrow
                  register={register}
                />
              </StyledAlignFlex>
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>
            <div className="box">
              <label htmlFor="password">Password</label>
              <Input
                type={showPass ? "text" : "password"}
                placeholder="At least 6 characters."
                name="password"
                leftImageHidden
                rightImage={
                  showPass ? "/assets/eye.svg" : "/assets/eye-off.svg"
                }
                onClick={hadnleShowPass}
                register={register}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>
            <div className="box">
              <label htmlFor="repeatPassword">Repeat Password</label>
              <Input
                type={showRePass ? "text" : "password"}
                placeholder="Type here"
                name="repeatPassword"
                leftImageHidden
                rightImage={
                  showRePass ? "/assets/eye.svg" : "/assets/eye-off.svg"
                }
                onClick={hadnleShowRePass}
                register={register}
              />
              {errors.repeatPassword && (
                <p className="error">{errors.repeatPassword.message}</p>
              )}
            </div>
            <Button
              text={isLoading ? "Loading..." : "Register now"}
              type="submit"
              color="secondary"
              variant="primary"
              width="100%"
              padding="10px 0"
              imageHidden
            />
          </form>
          <div className="agree">
            <Checkbox
              text="I agree with"
              showLink
              textLink="Terms and Conditions"
              linkPath="#"
              name="checked"
              register={register}
            />
            {errors.checked && (
              <p className="error">{errors.checked.message}</p>
            )}
          </div>

          <HaveAccount
            question="Already have an accaunt?"
            path="/Login"
            linkText="Log in"
          />
        </StyledRegister>
      </StyledFlexCenter>
    </StyledPage>
  );
};

export default SignUpPage;
