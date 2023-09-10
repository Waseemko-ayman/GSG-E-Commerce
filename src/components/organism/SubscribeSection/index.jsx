"use client";
/* eslint-disable @next/next/no-img-element */
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Button from "@/components/atoms/Button";
import { StyledSubscribe } from "./style.js";
import { StyledAlignFlex, StyledFlexCenter } from "@/style/common.js";
import Input from "@/components/atoms/Input/index.jsx";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const formSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegex, "Enter Correct Email")
    .required("Email is required"),
});

const Subscribe = () => {
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
    <StyledSubscribe>
      <h3>Subscribe on our newsletter</h3>
      <p>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <StyledFlexCenter as="form" onSubmit={handleSubmit(onSubmit)} gap="8px">
        <div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            leftImage="/assets/email.svg"
            rightImageHidden
            register={register}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <Button
          text="Subscribe"
          color="secondary"
          variant="primary"
          padding="10px"
          imageHidden
        />
      </StyledFlexCenter>
    </StyledSubscribe>
  );
};

export default Subscribe;
