"use client"
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { StyledSupliersForm } from "./style";
import { StyledFlex } from "@/style/common";

const RequestSuppliersForm = () => {
  return (
    <StyledSupliersForm>
      <h4>Send quote to suppliers</h4>
      <form>
        <Input type="text" placeholder="What item you need?" imageHidden />
        <Input type="textarea" placeholder="Type more details" imageHidden />
        <StyledFlex gap="8px">
          <Input type="text" placeholder="Quantity" imageHidden />
          <select>
            <option value="1">Pcs</option>
            <option value="2">Pcs</option>
            <option value="3">Pcs</option>
            <option value="4">Pcs</option>
          </select>
        </StyledFlex>
        <Button
          text="Send inquiry"
          type="submit"
          color="secondary"
          variant="primary"
          padding="10px" 
          imageHidden
        />
      </form>
    </StyledSupliersForm>
  );
};

export default RequestSuppliersForm;
