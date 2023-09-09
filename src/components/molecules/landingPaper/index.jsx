"use client";
import AccountImage from "@/components/atoms/AccountImage";
import Paper from "@/components/atoms/Paper";
import Button from "@/components/atoms/Button";
import { StyledPaper } from "./style.js";
import { StyledFlex } from "@/style/common.js";
import useAuth from "@/hook/useAuth.jsx";
import { useAuthContext } from "@/context/AuthContext.jsx";

const LandingPaper = () => {
  const { user } = useAuth();
  const { logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <StyledPaper>
      <div className="account__paper">
        <StyledFlex gap="9px">
          <AccountImage />
          <p>
            Hi, {user?.name} <br /> lets get stated
          </p>
        </StyledFlex>
        <Button
          text="Join now"
          color="secondary"
          variant="primary"
          width="100%"
          padding="7px 0"
          imageHidden
        />
        <Button
          text="Log out"
          color="primary"
          variant="secondary"
          width="100%"
          padding="7px 0"
          onClick={handleLogout}
          imageHidden
        />
      </div>
      <Paper textPaper="Get US $10 off with a new supplier" variant="orange" />
      <Paper
        textPaper="Send quotes with supplier preferences"
        variant="light-blue"
      />
    </StyledPaper>
  );
};

export default LandingPaper;
