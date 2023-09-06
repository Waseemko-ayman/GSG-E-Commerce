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
import { StyledAlignFlex, StyledGrid250, StyledGridProducts, StyledPage, StyledPaginationButtons } from "@/style/common";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    type === 'prev'
      ?
      setCurrentPage((prev) => (currentPage > 1 ? prev - 1 : currentPage))
      :
      setCurrentPage((prev) => (currentPage < Math.ceil(23 / size) ? prev + 1 : currentPage));
  }
  useEffect(() => {
    if (Math.ceil(totalProducts / size) < currentPage) {
      /**
       *To handle bug that apear when size=6 and reach the last page 
       *when change the size to 10, the currentPage of pages will be less than when size=6 
       */
      setCurrentPage(Math.ceil(totalProducts / size))
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
                {/* {
                  currentPage === 1 ?
                    // "sad"
                    <ArrowBackIosNewIcon disabled onClick={() => handlePageChange('prev')} disabled />
                    // <button onClick={() => handlePageChange('prev')} disabled>-</button>
                    :
                    <button onClick={() => handlePageChange('prev')}>-</button>
                } */}
                <ArrowBackIosNewIcon onClick={() => handlePageChange('prev')} disabled />
                {
                  Array(Math.ceil(totalProducts / size))
                    .fill(0)
                    .map((_, i) => {
                      return (
                        <StyledPaginationButtons key={i}>
                          {
                            (i + 1) === currentPage ?
                              <span style={{ backgroundColor: "#312531", color: "#fff" }}>{i + 1}</span>
                              :
                              <span>{i + 1}</span>
                          }
                        </StyledPaginationButtons>
                      )
                    })
                }
                {/* <button onClick={() => handlePageChange('next')}>+</button> */}
                <ArrowForwardIosIcon onClick={() => handlePageChange('next')} />
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
