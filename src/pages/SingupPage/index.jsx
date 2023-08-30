"use client";
import Button from "@/components/atoms/Button";
import HaveAccount from "@/components/atoms/HaveAccount";
import Input from "@/components/atoms/Input";
import FooterRegister from "@/components/molecules/FooterRegister";
import { StyledAlignFlex, StyledFlexCenter, StyledPage } from "@/style/common";
import { StyledRegister } from "./style";
import Checkbox from "@/components/atoms/Checkbox";

const SignUpPage = () => {
  return (
    <StyledPage>
      <StyledFlexCenter>
        <StyledRegister padding="30px">
          <h1>Register</h1>
          <form>
            <StyledAlignFlex gap="9px" className="box">
              <div>
                <label htmlFor="name">Name</label>
                <Input type="text" placeholder="Type here" imageHidden />
                {/* <p className="error">Must you write your name</p> */}
              </div>
              <div>
                <label htmlFor="surname">Surname</label>
                <Input type="text" placeholder="Type here" imageHidden />
                {/* <p className="error">Must you write your name</p> */}
              </div>
            </StyledAlignFlex>
            <div className="box">
              <label htmlFor="email">Your e-mail</label>
              <Input type="email" placeholder="example@mail.com" imageHidden />
              {/* <p className="error">Must you write your name</p> */}
            </div>
            <div className="box">
              <label htmlFor="phone">Phone</label>
              <StyledAlignFlex>
                <div className="selects">
                  <select>
                    <option value="1" selected>
                      PL +970
                    </option>
                    <option value="2">EG +20</option>
                    <option value="3">UZ +998</option>
                  </select>
                </div>
                <Input
                  type="number"
                  placeholder="00-000-00-00"
                  imageHidden
                  removeArrow
                />
              </StyledAlignFlex>
              {/* <p className="error">Must you write your name</p> */}
            </div>
            <div className="box">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                placeholder="At least 6 characters."
                imageHidden
              />
              {/* <p className="error">Must you write your name</p> */}
            </div>
            <div className="box">
              <label htmlFor="repassword">Repeat Password</label>
              <Input type="password" placeholder="Type here" imageHidden />
              {/* <p className="error">Must you write your name</p> */}
            </div>
            <Button
              text="Register now"
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
            />
          </div>

          <HaveAccount
            question="Already have an accaunt?"
            path="/Login"
            linkText="Log in"
          />
        </StyledRegister>
      </StyledFlexCenter>
      <FooterRegister />
    </StyledPage>
  );
};

export default SignUpPage;
