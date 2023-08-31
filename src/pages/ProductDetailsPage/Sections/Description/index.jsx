/* eslint-disable @next/next/no-img-element */
import Button from "@/components/atoms/Button";
import { StyledAlignFlex, StyledSection } from "@/style/common";
import { StyledDesc } from "./style";
import LikeProductCard from "@/components/molecules/LikeProductCard";
import { LIKE_CARD_DATA } from "@/mock/LikeCard";
import { useState } from "react";
import SpecificCategoryPage from "@/pages/SpecificCategoryPage";


const Tabs = ({config}) => {
  const [activeTa, setActiveTab] = useState(0)
}

const Description = () => {
  return (
    <StyledDesc>
        <SpecificCategoryPage />
      <StyledSection className="desc">
        <StyledAlignFlex className="tabs">
          <Button text="Description" color="gray" variant="secondary" padding="16px 16px 13px" imageHidden />
          <Button text="Reviews" color="gray" variant="secondary" padding="16px 16px 13px" imageHidden />
          <Button text="Shipping" color="gray" variant="secondary" padding="16px 16px 13px" imageHidden />
          <Button text="About company" color="gray" variant="secondary" padding="16px 16px 13px" imageHidden />
        </StyledAlignFlex>
        <div className="desc-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <table>
            <tbody>
              <tr>
                <td>Model</td>
                <td>#8786867</td>
              </tr>
              <tr>
                <td>Style</td>
                <td>Classic style</td>
              </tr>
              <tr>
                <td>Certificate</td>
                <td>ISO-898921212</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>34mm x 450mm x 19mm</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>36GB RAM</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Some great feature name here</span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Lorem ipsum dolor sit amet, consectetur </span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Duis aute irure dolor in reprehenderit</span>
            </StyledAlignFlex>
            <StyledAlignFlex gap="7px" as="li">
              <img src="/assets/check2.svg" alt="check" />{" "}
              <span>Some great feature name here</span>
            </StyledAlignFlex>
          </ul>
        </div>
      </StyledSection>
      
      <StyledSection padding="15px" className="sidebar">
        <h3>You may like</h3>
        <div className="products">
          {LIKE_CARD_DATA.map(({ id, src, title, price }) => (
            <LikeProductCard key={id} imageSrc={src} productName={title} productPrice={price} />
          ))}
        </div>
      </StyledSection>
    </StyledDesc>
  );
};

export default Description;
