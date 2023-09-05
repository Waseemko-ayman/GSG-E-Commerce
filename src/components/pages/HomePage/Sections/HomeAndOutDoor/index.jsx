"use client";
import HomeAndOutdoorProductCard from "@/components/molecules/HomeAndOutdoorProductCard";
import { StyledSection } from "@/style/common";
import OutdoorAndConsumerInfo from "@/components/molecules/OutdoorAndConsumerElectInfo";
import { HOME_OUTDOOR_DATA } from "@/mock/HomeAndOutdoorData";
import { StyledFlexMobile, StyledGridMobile } from "./style";
import Button from "@/components/atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "@/redux/slices/products";

const HomeAndOutDoor = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(1, 8, "furniture"))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <StyledSection margin="20px 0 30px">
      <StyledFlexMobile>
        <OutdoorAndConsumerInfo
          title="Home and outdoor"
          imageSrc="/assets/HomeAndOutdoor.png"
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

export default HomeAndOutDoor;
