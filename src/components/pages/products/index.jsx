"use client";
import PathSection from "@/components/molecules/PathSection";
import ProductsListCard from "@/components/molecules/ProductsListCard";
import ProductsListCard2 from "@/components/molecules/ProductsListCard2";
import ProductsListHeader from "@/components/molecules/ProdutsListHeader";
import Container from "@/components/organism/Container";
import Sidebar from "@/components/organism/Sidebar";
import Subscribe from "@/components/organism/SubscribeSection";
// import { addToCart } from "@/redux/slices/cartItem";
import { getProducts } from "@/redux/slices/products";
import {
  StyledAlignFlex,
  StyledGrid250,
  StyledGridProducts,
  StyledPage,
} from "@/style/common";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StyledPagination } from "./style";

const ProductsListPage = () => {
  const dispatch = useDispatch();
  const [convert, setConvert] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(6);
  const { products } = useSelector((state) => state.products);
  const totalProducts = 23;

  const HandleToggle = () => {
    setConvert(!convert);
  };

  const handlePageChange = (type) => {
    type === "prev"
      ? setCurrentPage((prev) => (currentPage > 1 ? prev - 1 : currentPage))
      : setCurrentPage((prev) =>
          currentPage < Math.ceil(23 / size) ? prev + 1 : currentPage
        );
  };
  useEffect(() => {
    if (Math.ceil(totalProducts / size) < currentPage) {
      /**
       *To handle bug that apear when size=6 and reach the last page
       *when change the size to 10, the currentPage of pages will be less than when size=6
       */
      setCurrentPage(Math.ceil(totalProducts / size));
    }
    dispatch(getProducts(currentPage, size));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, currentPage]);
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
                    setSize(e.target.value);
                  }}
                  name="limit"
                >
                  <option value="6" defaultValue>
                    Show 6
                  </option>
                  <option value="8">Show 8</option>
                  <option value="10">Show 10</option>
                </select>
              </div>
              <StyledAlignFlex>
                <button
                  onClick={() => handlePageChange("prev")}
                  className="arrow"
                >
                  <ArrowBackIosNewIcon disabled />
                </button>
                {Array(Math.ceil(totalProducts / size))
                  .fill(0)
                  .map((_, i) => {
                    return (
                      <div key={i}>
                        {i + 1 === currentPage ? (
                          <button
                            style={{
                              backgroundColor: "#e3e8ee",
                              color: "#8B96A5",
                            }}
                          >
                            {i + 1}
                          </button>
                        ) : (
                          <button>{i + 1}</button>
                        )}
                      </div>
                    );
                  })}
                <button
                  onClick={() => handlePageChange("next")}
                  className="arrow"
                >
                  <ArrowForwardIosIcon />
                </button>
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
