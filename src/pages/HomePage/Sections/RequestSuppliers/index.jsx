import React from "react";
import "./style.css"
import RequestSuppliersForm from "@/components/molecules/RequestSuppliersForm";

const RequestSuppliers = () => {
  return (
    <div className="request__suppliers">
      <div className="text">
        <h3>An easy way to send requests to all suppliers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <RequestSuppliersForm />
    </div>
  );
};

export default RequestSuppliers;
