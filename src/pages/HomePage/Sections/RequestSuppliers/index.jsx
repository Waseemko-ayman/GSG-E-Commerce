"use client";
import RequestSuppliersForm from "@/components/molecules/RequestSuppliersForm";
import { StyledRequestSuppliers } from "./style.js";
import Button from "@/components/atoms/Button/index.jsx";

const RequestSuppliers = () => {
  return (
    <StyledRequestSuppliers>
      <div className="text">
        <h3>An easy way to send requests to all suppliers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <Button
          text="Send inquiry"
          type="submit"
          color="secondary"
          variant="primary"
          padding="8px 15px"
          imageHidden
        />
      </div>
      <RequestSuppliersForm />
    </StyledRequestSuppliers>
  );
};

export default RequestSuppliers;
