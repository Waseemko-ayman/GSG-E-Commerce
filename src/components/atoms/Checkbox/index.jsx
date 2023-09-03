"use client";
import Link from "next/link";
import { StyledCheckbox } from "./style";

const Checkbox = ({ text, showLink, textLink, linkPath, name, register }) => {
  return (
    <StyledCheckbox gap="10px">
      <input type="checkbox" id={name} {...register(name)} />
      <p>
        {text} {showLink && <Link href={linkPath}>{textLink}</Link>}
      </p>
    </StyledCheckbox>
  );
};

export default Checkbox;
