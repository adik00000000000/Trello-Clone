import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";

export const LayoutPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
