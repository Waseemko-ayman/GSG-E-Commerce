"use client";
import { StyledPagination } from "@/components/molecules/Pagination/style";
import PathSection from "@/components/molecules/PathSection";
import ProductsListCard from "@/components/molecules/ProductsListCard";
import ProductsListCard2 from "@/components/molecules/ProductsListCard2/indeex";
import ProductsListHeader from "@/components/molecules/ProdutsListHeader";
import Container from "@/components/organism/Container";
import Sidebar from "@/components/organism/Sidebar";
import Subscribe from "@/components/organism/SubscribeSection";
import { addToCart } from "@/redux/slices/cartItem";
import { getProducts } from "@/redux/slices/products";
import {
  StyledAlignFlex,
  StyledGrid250,
  StyledGridProducts,
  StyledPage,
} from "@/style/common";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsListPage = () => {
  const [convert, setConvert] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const prevSubmit = () => {
    setPage((prev) => (page > 1 ? prev - 1 : page));
  };
  const nextSubmit = () => {
    setPage((prev) => (page < Math.ceil(23 / limit) ? prev + 1 : page));
  };
  const HandleToggle = () => {
    setConvert(!convert);
  };

  const handleAddToCard = (product) => {
    dispatch(addToCart(product));
    console.log("add product card")
  }

  useEffect(() => {
    if (Math.ceil(23 / limit) < page) {
      /**
       *To handle bug that apear when limit=6 and reach the last page
       *when change the limit to 10, the page of pages will be less than when limit=6
       */
      setPage(Math.ceil(23 / limit));
    }
    dispatch(getProducts(page, limit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, page]);
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
                  handleAddToCard={() => handleAddToCard(product)}
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
                <select
                  onChange={(e) => {
                    setLimit(e.target.value);
                  }}
                  name="limit"
                >
                  <option value="6" selected>Show 6</option>
                  <option value="8">Show 8</option>
                  <option value="10">Show 10</option>
                </select>
              </div>
              <StyledAlignFlex>
                <button onClick={prevSubmit}>-</button>
                <button>{page}</button>
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
