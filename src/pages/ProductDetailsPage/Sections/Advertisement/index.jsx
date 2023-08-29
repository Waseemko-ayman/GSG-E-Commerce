import Button from "@/components/atoms/Button";
import { StyledBetweenAlignFlex } from "@/style/common";
import { StyledAdvertisement } from "./style";

const Advertisement = () => {
  return (
    <StyledAdvertisement>
      <StyledBetweenAlignFlex>
        <div className="text">
          <h3>Super discount on more than 100 USD</h3>
          <p>Have you ever finally just write dummy info</p>
        </div>
        <Button text="Shop now" color="secondary" variant="orange" padding="50px" />
      </StyledBetweenAlignFlex>
    </StyledAdvertisement>
  );
};

export default Advertisement;
