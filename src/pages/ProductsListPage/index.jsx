"use client"
import PathSection from '@/components/molecules/PathSection';
import Container from '@/components/organism/Container';
import { StyledPage } from '@/style/common';

const ProductsListPage = () => {
  return (
    <StyledPage as="div">
      <Container>
        <PathSection />
      </Container>
    </StyledPage>
  )
}

export default ProductsListPage;