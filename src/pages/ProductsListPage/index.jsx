"use client";
import Pagination from "@/components/molecules/Pagination";
import PathSection from "@/components/molecules/PathSection";
import ProductsListCard from "@/components/molecules/ProductsListCard";
import ProductsListCard2 from "@/components/molecules/ProductsListCard2/indeex";
import ProductsListHeader from "@/components/molecules/ProdutsListHeader";
import Container from "@/components/organism/Container";
import Sidebar from "@/components/organism/Sidebar";
import Subscribe from "@/components/organism/SubscribeSection";
import {
  PRODUCTSLIST_DATA,
  PRODUCTSLIST_GRAID_DATA,
} from "@/mock/ProducsListCard";
import { getProducts } from "@/redux/slices/products";
import { StyledGrid250, StyledGridProducts, StyledPage } from "@/style/common";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsListPage = () => {
  const [convert, setConvert] = useState(true);

  const { products } = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();

  const handleClickGrid = () => {
    setConvert(false);
  };

  const handleClickRow = () => {
    setConvert(true);
  };

  useEffect(() => {
    // if (!products.length) {
    // }
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPage as="div">
      <Container>
        <PathSection />
        <StyledGridProducts>
          <Sidebar />
          <div className="products">
            <ProductsListHeader
              handleClickRow={handleClickRow}
              handleClickGrid={handleClickGrid}
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
                  />
                ))}
              </StyledGrid250>
            )}
            <Pagination />
          </div>
        </StyledGridProducts>
      </Container>
      <Subscribe />
    </StyledPage>
  );
};

export default ProductsListPage;
