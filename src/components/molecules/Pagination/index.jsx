"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/atoms/Button";
import { StyledAlignFlex } from "@/style/common";
import { StyledPagination } from "./style";
import useAPI from "@/hook/useAPI";
import { API_URL } from "@/config/api";
import { useEffect, useState } from "react";

const Pagination = () => {
  const [num, setNum] = useState(1);
  const [size, setSize] = useState(10);
  
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  const pageQuery = `?_page=${num}`;
  // const searchQuery = search ? `&q=${deferredQuery}` : '';
  const sizeQuery = `&_limit=${size}`;

  // const { getUsers, users, deleteUser } = useAPI(
  //   AUTH_API_URL + "users" + sizeQuery + searchQuery + pageQuery,
  //   config
  // );
  const { getUsers, users } = useAPI(
    API_URL + "products" + pageQuery + sizeQuery
  );

  const prevSubmit = () => {
    setNum((prev) => (num > 1 ? prev - 1 : num));
  };
  const nextSubmit = () => {
    setNum((prev) => (num <= users.pages ? prev + 1 : num));
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, num]);

  return (
    <StyledPagination gap="9px">
      <div className="selects">
        <select onChange={(e) => setSize(e.target.value)} name='size'>
          <option value="10" selected>10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
      <StyledAlignFlex>
        <Button
          color="dark"
          variant="secondary"
          borderColor="gray"
          padding="10px"
          imageSrc="/assets/chevron-left.svg"
          onClick={prevSubmit} 
          disabled={users.page === 1 ? true : false}
        />
        <button>{users.page}</button>
        {/* <Button color="dark" variant="secondary" text="1" borderColor="gray" padding="10px" imageHidden />
        <Button color="dark" variant="secondary" text="2" borderColor="gray" padding="10px" imageHidden />
        <Button color="dark" variant="secondary" text="3" borderColor="gray" padding="10px" imageHidden /> */}
        <Button
          color="dark"
          variant="secondary"
          borderColor="gray"
          padding="10px"
          imageSrc="/assets/chevron_right.svg"
          onClick={nextSubmit} 
          disabled={users.page === users.pages ? true : false}
        />
      </StyledAlignFlex>
    </StyledPagination>
  );
};

export default Pagination;
