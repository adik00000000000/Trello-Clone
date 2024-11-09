import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export const HeaderList = ({ title }) => {
  return (
    <StyledList>
      <div>
        <p>{title}</p>
        <StyledIcon />
      </div>
    </StyledList>
  );
};

const StyledList = styled.li`
  list-style-type: none;
  font-weight: 700;
  &:hover {
    background-color: #7588995e;
    width: fit-content;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    display: flex;
  }

  p {
    color: white;
    font-size: 20px;
  }
`;

