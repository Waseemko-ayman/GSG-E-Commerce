import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { StyledAlignFlex } from "@/style/common";
import { StyledCoupon } from "./style";

const CouponCard = () => {
  return (
    <StyledCoupon padding="20px">
      <h3>Have a coupon?</h3>
      <StyledAlignFlex>
        <Input type="text" placeholder="Add coupon" imageHidden name="coupon" />
        <Button
          text="Apply"
          color="primary"
          variant="secondary"
          borderColor="gray"
          width="85px"
          imageHidden
        />
      </StyledAlignFlex>
    </StyledCoupon>
  );
};

export default CouponCard;
