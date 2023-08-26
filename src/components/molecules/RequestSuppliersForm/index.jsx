import React from "react";
import "./style.css";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const RequestSuppliersForm = () => {
  return (
    <div className="request-suppliers-form">
      <h4>Send quote to suppliers</h4>
      <form>
        <Input type="text" placeholder="What item you need?" imageHidden />
        <Input type="textarea" placeholder="Type more details" imageHidden />
        <div style={{ display: "flex" }}>
          <Input type="text" placeholder="Quantity" imageHidden />
          <select>
            <option value="1">Pcs</option>
            <option value="2">Pcs</option>
            <option value="3">Pcs</option>
            <option value="4">Pcs</option>
          </select>
        </div>
        <Button
          text="Send inquiry"
          type="submit"
          color="secondary"
          variant="primary"
        />
      </form>
    </div>
  );
};

export default RequestSuppliersForm;
