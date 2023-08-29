import ServicesCard from '@/components/molecules/ServicesCard';
import { SERVICES_DATA } from '@/mock/ServicesCardData';
import { StyledAlignFlex } from '@/style/common';

const Services = () => {
  return (
    <StyledAlignFlex gap="54px" margin="20px 0">
      {SERVICES_DATA.map(({ id, src, title, decription })=> (
        <ServicesCard key={id} imageSrc={src} titleService={title} decription={decription} />
      ))}
    </StyledAlignFlex>
  )
}

export default Services;