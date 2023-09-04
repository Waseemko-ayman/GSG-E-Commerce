import RelatedProductCard from '@/components/molecules/RelatedProductCard';
import { RELATED_DATA } from '@/mock/RelatedProducts';
import { StyledGrid180 } from '@/style/common';
import { StyledRelatedProducts } from './style';

const RelatedProducts = () => {
  return (
    <StyledRelatedProducts padding="20px">
      <h3>Related products</h3>
      <StyledGrid180 gap="20px" className="products">
        {RELATED_DATA.map(({ id, src, title, price }) => (
          <RelatedProductCard key={id} imageSrc={src} productTitle={title} productPrice={price} />
        ))}
      </StyledGrid180>
    </StyledRelatedProducts>
  )
}

export default RelatedProducts;