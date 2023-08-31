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
import { StyledGrid250, StyledGridProducts, StyledPage } from "@/style/common";
import { useState } from "react";

const ProductsListPage = () => {
  const [convert, setConvert] = useState(true);

  const handleClickGrid = () => {
    setConvert(false);
  };

  const handleClickRow = () => {
    setConvert(true);
  };

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
              <>
                {PRODUCTSLIST_DATA.map(
                  ({
                    id,
                    src,
                    title,
                    price,
                    oldPrice,
                    rate,
                    orders,
                    description,
                  }) => (
                    <ProductsListCard
                      key={id}
                      imageSrc={src}
                      productTitle={title}
                      productPrice={price}
                      oldPrice={oldPrice}
                      productRating={rate}
                      productOrders={orders}
                      productDesc={description}
                    />
                  )
                )}
              </>
            ) : (
              <StyledGrid250 gap="20px">
                {PRODUCTSLIST_GRAID_DATA.map(
                  ({ id, src, title, price, oldPrice, rate, rateSrc }) => (
                    <ProductsListCard2
                      key={id}
                      imageSrc={src}
                      productTitle={title}
                      productPrice={price}
                      oldPrice={oldPrice}
                      productRating={rate}
                      rateSrc={rateSrc}
                    />
                  )
                )}
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
