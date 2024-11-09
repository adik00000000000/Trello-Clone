import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const Modal = ({ onClick, children }) => {
  return createPortal(
    <StyledCart onClick={onClick}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </StyledCart>,
    document.getElementById("modal")
  );
};

const StyledCart = styled.div`
  width: 100%;
  height: 110vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #343030a3;
  display: flex;
`;
