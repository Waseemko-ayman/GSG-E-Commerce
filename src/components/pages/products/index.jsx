"use client";
import { StyledPagination } from "@/components/molecules/Pagination/style";
import PathSection from "@/components/molecules/PathSection";
import ProductsListCard from "@/components/molecules/ProductsListCard";
import ProductsListCard2 from "@/components/molecules/ProductsListCard2/indeex";
import ProductsListHeader from "@/components/molecules/ProdutsListHeader";
import Container from "@/components/organism/Container";
import Sidebar from "@/components/organism/Sidebar";
import Subscribe from "@/components/organism/SubscribeSection";
import { getProducts } from "@/redux/slices/products";
import { StyledAlignFlex, StyledGrid250, StyledGridProducts, StyledPage } from "@/style/common";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsListPage = () => {
  const dispatch = useDispatch();
  const [convert, setConvert] = useState(true);
  const [num, setNum] = useState(1);
  const [size, setSize] = useState(6);
  const { products } = useSelector((state) => state.products);
  const prevSubmit = () => {
    setNum((prev) => (num > 1 ? prev - 1 : num));
    console.log(num);
  };
  const nextSubmit = () => {
    setNum((prev) => (num < Math.ceil(23 / size) ? prev + 1 : num));
    console.log(num);
  };
  const HandleToggle = () => {
    setConvert(!convert);
  };
  
  useEffect(() => {
    if (Math.ceil(23 / size) < num) {
      /**
       *To handle bug that apear when size=6 and reach the last page 
       *when change the size to 10, the num of pages will be less than when size=6 
       */
      setNum(Math.ceil(23 / size))
    }
    dispatch(getProducts(num, size));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, num]);
  return (
    <StyledPage as="div">
      <Container>
        <PathSection />
        <StyledGridProducts>
          <Sidebar />
          <div className="products">
            <ProductsListHeader
              handleClickRow={HandleToggle}
              handleClickGrid={HandleToggle}
            />
            {convert ? (
              products.map((product) => (
                <ProductsListCard
                  key={product?.id}
                  imageSrc={product?.image}
                  productTitle={product?.title}
                  productPrice={product?.price}
                  oldPrice={product?.discount}
                  productRating={product?.evaluation}
                  productOrders={product?.orders}
                  productDesc={product?.caption}
                  productId={product?.id}
                />
              ))
            ) : (
              <StyledGrid250 gap="20px">
                {products.map((product) => (
                  <ProductsListCard2
                    key={product?.id}
                    imageSrc={product?.image}
                    productTitle={product?.title}
                    productPrice={product?.price}
                    oldPrice={product?.discount}
                    productRating={product?.evaluation}
                    productOrders={product?.orders}
                    productId={product?.id}
                  />
                ))}
              </StyledGrid250>
            )}
            <StyledPagination gap="9px">
              <div className="selects">
                <select onChange={(e) => { setSize(e.target.value); console.log(size); }} name='size'>
                  <option value="6" selected>6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
              </div>
              <StyledAlignFlex>
                <button onClick={prevSubmit}>-</button>
                <button>{num}</button>
                <button onClick={nextSubmit}>+</button>
              </StyledAlignFlex>
            </StyledPagination>
          </div>
        </StyledGridProducts>
      </Container>
      <Subscribe />
    </StyledPage>
  );
};

export default ProductsListPage;
