"use client"
import Container from '@/components/organism/Container';
import { StyledPage } from '@/style/common';
import MyCart from './Sections/MyCart';
import Services from './Sections/Services';


const CartPage = () => {
  return (
    <StyledPage>
      <Container>
        <MyCart />
        <Services />
      </Container>
    </StyledPage>
  )
}

export default CartPage;