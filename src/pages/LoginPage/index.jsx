"use client"
import FooterRegister from "@/components/molecules/FooterRegister";
import LoginForm from "@/components/molecules/LoginForm";
import { StyledPage } from "@/style/common";

const LogInPage = () => {
  return (
    <StyledPage>
      <LoginForm />
      <FooterRegister />
    </StyledPage>
  )
}

export default LogInPage;