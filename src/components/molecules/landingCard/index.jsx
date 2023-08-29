import Button from "@/components/atoms/Button";
import { StyledLadningCard } from "./style";

const LandingCard = () => {
  return (
    <StyledLadningCard>
      <div className="text">
        <p>Latest trending</p>
        <h1>Electronic items</h1>
        <Button text="Learn more" color="dark" variant="secondary" padding="10px" imageHidden />
      </div>
    </StyledLadningCard>
  );
};

export default LandingCard;
