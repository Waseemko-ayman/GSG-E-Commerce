/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/components/atoms/Button";
import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

const StyledPagination = styled(StyledAlignFlex)`
  margin-top: 30px;
  float: right;

  .selects {
    color: var(--dark-color);
    background-color: var(--white-color);
    border: 1px solid var(--gray-300-color);
    border-radius: 6px;
    padding: 0 10px;
    cursor: pointer;
  }

  .selects select {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-right: 25px;
    padding: 10px 62px 10px 0;
    border: none;
    outline: none;
    cursor: pointer;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 !important;
    width: 44px;
    height: 40px;
  }

  button:hover {
    background: var(--gray-300-color);
    color: var(--dark-color);
  }

  button img {
    max-width: 100%;
    width: 24px;
  }

  button:nth-child(1) {
    border-radius: 6px 0 0 6px !important;
  }

  button:nth-child(5) {
    border-radius: 0 6px 6px 0 !important;
  }
`;

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
          text={<img src="/assets/chevron-left.svg" alt="chevron_left" />}
        />
        <Button color="dark" variant="secondary" text="1" borderColor="gray" />
        <Button color="dark" variant="secondary" text="2" borderColor="gray" />
        <Button color="dark" variant="secondary" text="3" borderColor="gray" />
        <Button
          color="dark"
          variant="secondary"
          borderColor="gray"
          text={<img src="/assets/chevron_right.svg" alt="chevron_right" />}
        />
      </StyledAlignFlex>
    </StyledPagination>
  );
};

export default Pagination;
