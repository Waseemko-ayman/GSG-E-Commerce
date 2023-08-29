import ServicesCard from '@/components/molecules/ServicesCard';
import { SERVICES_DATA } from '@/mock/ServicesCardData';
import { StyledServices } from './style';

const Services = () => {
  return (
    <StyledServices gap="54px">
      {SERVICES_DATA.map(({ id, src, title, decription })=> (
        <ServicesCard key={id} imageSrc={src} titleService={title} decription={decription} />
      ))}
    </StyledServices>
  )
}

export default Services;