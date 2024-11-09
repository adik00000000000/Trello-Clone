import React from "react";
import styled from "styled-components";
import BgImage from "../assets/images/mountain.jpg";
import { MainForm } from "../components/main/MainForm";
import { MainList } from "../components/main/MainList";
import { useSelector } from "react-redux";
import { ModalLogOut } from "../components/header/ModHead";

export const MainLayout = () => {
  const { modal } = useSelector((store) => store.trello);

  return (
    <StyledDid $bgImg={BgImage}>
      <MainForm />
      <MainList />

      {modal && <ModalLogOut />}
    </StyledDid>
  );
};

const StyledDid = styled.div`
  background-image: url(${({ $bgImg }) => $bgImg});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;
