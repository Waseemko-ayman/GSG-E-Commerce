"use client";
import { StyledSection } from "@/style/common";
import OutdoorAndConsumerInfo from "@/components/molecules/OutdoorAndConsumerElectInfo";
import HomeAndOutdoorProductCard from "@/components/molecules/HomeAndOutdoorProductCard";
import { CONSUMER_ELECTRONICS_DATA } from "@/mock/ConsumerElectronicsData";
import { StyledFlexMobile, StyledGridMobile } from "../HomeAndOutDoor/style";
import Button from "@/components/atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "@/redux/slices/products";

const ConsumerElectronics = () => {
  const { products } = useSelector((state) => state.products);
  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(2, 8))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSection margin="20px 0 30px">
      <StyledFlexMobile>
        <OutdoorAndConsumerInfo
          title="Consumer electronics and gadgets"
          imageSrc="/assets/ConsumerElectronics.png"
        />
        <StyledGridMobile>
          {products.map((product) => (
            <HomeAndOutdoorProductCard
              key={product?.id}
              // imageSrc={product?.image}
              productName={product?.title}
              productPrice={product?.price}
            />
          ))}
        </StyledGridMobile>
        <Button
          text="Source now"
          color="primary"
          variant="secondary"
          imageSrc="/assets/arrow_forward.svg"
          gap="5px"
          padding="20px"
          order
        />
      </StyledFlexMobile>
    </StyledSection>
  );
};

export default ConsumerElectronics;
