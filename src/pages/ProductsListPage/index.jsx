"use client"
import PathSection from '@/components/molecules/PathSection';
import Container from '@/components/organism/Container';
import Sidebar from '@/components/organism/Sidebar';
import { StyledGridProducts, StyledPage } from '@/style/common';

const ProductsListPage = () => {
  return (
    <StyledPage as="div">
      <Container>
        <PathSection />
        <StyledGridProducts>
          <Sidebar />
        </StyledGridProducts>
      </Container>
    </StyledPage>
  )
}

export default ProductsListPage;