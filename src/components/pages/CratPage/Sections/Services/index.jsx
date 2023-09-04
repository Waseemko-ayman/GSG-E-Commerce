import ServicesCard from '@/components/molecules/ServicesCard';
import { SERVICES_DATA } from '@/mock/ServicesCardData';
import { StyledAlignFlex } from '@/style/common';
import { styled } from 'styled-components';

const StyledSercices = styled(StyledAlignFlex)`
  @media (max-width: 769px) {
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Services = () => {
  return (
    <StyledSercices gap="54px" margin="20px 0">
      {SERVICES_DATA.map(({ id, src, title, decription })=> (
        <ServicesCard key={id} imageSrc={src} titleService={title} decription={decription} />
      ))}
    </StyledSercices>
  )
}

export default Services;