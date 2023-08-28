"use client";
import RequestSuppliersForm from "@/components/molecules/RequestSuppliersForm";
import { StyledRequestSuppliers } from "./style.js";

const RequestSuppliers = () => {
  return (
    <StyledRequestSuppliers>
      <div className="text">
        <h3>An easy way to send requests to all suppliers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <RequestSuppliersForm />
    </StyledRequestSuppliers>
  );
};

export default RequestSuppliers;
