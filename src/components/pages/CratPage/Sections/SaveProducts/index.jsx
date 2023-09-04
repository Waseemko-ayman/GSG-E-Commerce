import SavedProductsCard from "@/components/molecules/SavedProductsCard";
import { SAVED_PRODUCTS } from "@/mock/SavedProductsData";
import { StyledGrid250, StyledSection } from "@/style/common";
import { styled } from "styled-components";

const StyledSaveProducts = styled(StyledSection)`
  h3 {
    margin-bottom: 30px;
  }
`;

const SaveProducts = () => {
  return (
    <StyledSaveProducts padding="20px" margin="20px 0">
      <h3>Saved for later</h3>
      <StyledGrid250 gap="20px">
        {SAVED_PRODUCTS.map(({ id, src, price, description }) => (
          <SavedProductsCard
            key={id}
            imageSrc={src}
            productPrice={price}
            productTitle={description}
          />
        ))}
      </StyledGrid250>
    </StyledSaveProducts>
  );
};

export default SaveProducts;
