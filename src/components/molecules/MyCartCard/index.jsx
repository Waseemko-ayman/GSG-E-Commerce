/* eslint-disable @next/next/no-img-element */
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { StyledFlex } from "@/style/common";
import { StledMyCartCard } from "./style";

const MyCartCard = ({ imageSrc, title, size, seller, price }) => {
  return (
    <StledMyCartCard>
      <StyledFlex gap="10px">
        <img src={imageSrc} alt="img" />
        <div>
          <h3>{title}</h3>
          <div className="size_seller">
            <p>Size: {size}</p>
            <p>Seller: {seller}</p>
          </div>
          <StyledFlex gap="10px">
            <Button
              text="Remove"
              color="danger"
              variant="secondary"
              borderColor="gray"
              padding="7px 0"
              width="71px"
              imageHidden
            />
            <Button
              text="Save for later"
              color="primary"
              variant="secondary"
              borderColor="gray"
              padding="7px 0"
              width="108px"
              imageHidden
            />
          </StyledFlex>
        </div>
      </StyledFlex>
      <div className="price">
        <h4>{price}</h4>
        <Input type="number" placeholder="Qty: 9" imageHidden />
      </div>
    </StledMyCartCard>
  );
};

export default MyCartCard;
