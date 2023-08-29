"use client"
import Path from '@/components/atoms/path';
import { PATH_SECTION_DATA } from '@/mock/pathSection';
import { StyledAlignFlex } from '@/style/common';

const PathSection = () => {
  return (
    <StyledAlignFlex gap="7px" padding="20px 0">
      {PATH_SECTION_DATA.map(({ id, title }) => (
        <Path key={id} pathName={title} />
      ))}
    </StyledAlignFlex>
  )
}

export default PathSection;