/* eslint-disable @next/next/no-img-element */
import Button from "@/components/atoms/Button";
import { CREDIT_SRC } from "@/mock/CreditImage";
import {
  StyledBetweenAlignFlex,
  StyledFlexCenter,
} from "@/style/common";
import { StyledTotalCard } from "./style";

const TotalPriceCard = () => {
  return (
    <StyledTotalCard padding="20px">
      <div className="subtotal">
        <StyledBetweenAlignFlex>
          <span>Subtotal:</span>
          <span>$1403.97</span>
        </StyledBetweenAlignFlex>
        <StyledBetweenAlignFlex>
          <span>Discount:</span>
          <span>- $60.00</span>
        </StyledBetweenAlignFlex>
        <StyledBetweenAlignFlex>
          <span>Tax:</span>
          <span>+ $14.00</span>
        </StyledBetweenAlignFlex>
      </div>
      <StyledBetweenAlignFlex className="total">
        <h4>Total:</h4>
        <span>$1357.97</span>
      </StyledBetweenAlignFlex>
      <Button
        text="Checkout"
        color="secondary"
        variant="green"
        width="100%"
        padding="15px 0"
        imageHidden
      />
      <StyledFlexCenter gap="15px" margin="18px 0 0">
        {CREDIT_SRC.map(({ id, src }) => (
          <StyledFlexCenter className="image" key={id}>
            <img src={src} alt="credit" />
          </StyledFlexCenter>
        ))}
      </StyledFlexCenter>
    </StyledTotalCard>
  );
};

export default TotalPriceCard;
