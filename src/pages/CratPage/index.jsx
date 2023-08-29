import Container from '@/components/organism/Container';
import { StyledPage } from '@/style/common';
import MyCart from './Sections/MyCart';


const CartPage = () => {
  return (
    <StyledPage>
      <Container>
        <MyCart />
      </Container>
    </StyledPage>
  )
}

export default CartPage;