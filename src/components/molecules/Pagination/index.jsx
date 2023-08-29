"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/atoms/Button";
import { StyledAlignFlex } from "@/style/common";
import { StyledPagination } from "./style";

const Pagination = () => {
  return (
    <StyledPagination gap="9px">
      <div className="selects">
        <select>
          <option value="1">Show 9</option>
          <option value="1" selected>
            Show 10
          </option>
          <option value="2">Show 20</option>
          <option value="3">Show 30</option>
          <option value="3">Show 40</option>
          <option value="3">Show 50</option>
        </select>
      </div>
      <StyledAlignFlex>
        <Button
          color="dark"
          variant="secondary"
          borderColor="gray"
          padding="10px"
          imageSrc="/assets/chevron-left.svg"
        />
        <Button color="dark" variant="secondary" text="1" borderColor="gray" padding="10px" imageHidden />
        <Button color="dark" variant="secondary" text="2" borderColor="gray" padding="10px" imageHidden />
        <Button color="dark" variant="secondary" text="3" borderColor="gray" padding="10px" imageHidden />
        <Button
          color="dark"
          variant="secondary"
          borderColor="gray"
          padding="10px"
          imageSrc="/assets/chevron_right.svg"
        />
      </StyledAlignFlex>
    </StyledPagination>
  );
};

export default Pagination;
