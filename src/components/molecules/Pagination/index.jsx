"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/atoms/Button";
import { StyledAlignFlex } from "@/style/common";
import { StyledPagination } from "./style";
import useAPI from "@/hook/useAPI";
import { API_URL } from "@/config/api";
import { useEffect, useState } from "react";
import { getProducts } from "@/redux/slices/products";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const [num, setNum] = useState(1);
  const [size, setSize] = useState(10);

  const pageQuery = `?_page=${num}`;
  const sizeQuery = `&_limit=${size}`;

  // const { getUsers, users } = useAPI(
  //   API_URL + "products" + pageQuery + sizeQuery
  // );
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const prevSubmit = () => {
    setNum((prev) => (num > 1 ? prev - 1 : num));
  };
  const nextSubmit = () => {
    setNum((prev) => (num < Math.ceil(products.length / size) ? prev + 1 : num));  
  };

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPagination gap="9px">
      <div className="selects">
        <select onChange={(e) => { setSize(e.target.value); console.log(size); }} name='size'>
          <option value="6" defaultValue>6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </div>
      <StyledAlignFlex>
        {/* <Button
          color="dark"
          variant="secondary"
          borderColor="gray"
          padding="10px"
          imageSrc="/assets/chevron-left.svg"
          onClick={prevSubmit} 
          disabled={users.page === 1 ? true : false}
        /> */}
        <button onClick={prevSubmit}>-</button>
        <button>{num > Math.ceil(products.length / size) ? Math.ceil(products.length / size) : num}</button>
        {/* <Button color="dark" variant="secondary" text="1" borderColor="gray" padding="10px" imageHidden />
        <Button color="dark" variant="secondary" text="2" borderColor="gray" padding="10px" imageHidden />
        <Button color="dark" variant="secondary" text="3" borderColor="gray" padding="10px" imageHidden /> */}
        {/* <Button
          color="dark"
          variant="secondary"
          borderColor="gray"
          padding="10px"
          imageSrc="/assets/chevron_right.svg"
          onClick={nextSubmit} 
          disabled={users.page === users.pages ? true : false}
        /> */}

        <button onClick={nextSubmit}>+</button>
      </StyledAlignFlex>
    </StyledPagination>
  );
};

export default Pagination;
