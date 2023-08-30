"use client";

import Link from "next/link";
import { StyledCheckbox } from "./style";

const Checkbox = ({ text, showLink, textLink, linkPath }) => {
  return (
    <StyledCheckbox gap="10px">
      <input type="checkbox" />
      <p>{text} {showLink && ( <Link href={linkPath}>{textLink}</Link> )}</p>
    </StyledCheckbox>
  );
};

export default Checkbox;
