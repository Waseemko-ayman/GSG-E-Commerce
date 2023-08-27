"use client"
import Path from '@/components/atoms/path';
import { PATH_SECTION_DATA } from '@/mock/pathSection';
import { StyledAlignFlex } from '@/style/common';
import { styled } from 'styled-components';

const StyledPathSection = styled(StyledAlignFlex)`
  gap: 7px;
  padding: 20px 0;
`;

const PathSection = () => {
  return (
    <StyledPathSection>
      {PATH_SECTION_DATA.map(({ id, title }) => (
        <Path key={id} pathName={title} />
      ))}
    </StyledPathSection>
  )
}

export default PathSection;