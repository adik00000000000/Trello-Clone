import React from "react";
import { useSelector } from "react-redux";
import { MainItem } from "./MainItem";
import styled from "styled-components";
import { closeCart, deleteCard } from "../../store/slice/trelloSlice";

export const MainList = () => {
  const { task, cartId } = useSelector((store) => store.trello);

  const deleteCardHandler = () => {
    dispatch(deleteCard(cartId));
    dispatch(closeCart());
  };

  const closeCartHandler = () => {
    dispatch(closeCart());
  };
  return (
    <MainListContainer>
      {task.map((item) => (
        <MainItem
          key={item.id}
          {...item}
          deleteCardHandler={deleteCardHandler}
          closeCartHandler={closeCartHandler}
        />
      ))}
    </MainListContainer>
  );
};

const MainListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
`;
