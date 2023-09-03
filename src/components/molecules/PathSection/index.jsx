"use client"
import Path from '@/components/atoms/path';
import { PATH_SECTION_DATA } from '@/mock/pathSection';
import { StyledPath } from './style';

const PathSection = () => {
  return (
    <StyledPath gap="7px" padding="20px 0">
      {PATH_SECTION_DATA.map(({ id, title }) => (
        <Path key={id} pathName={title} />
      ))}
    </StyledPath>
  )
}

export default PathSection;