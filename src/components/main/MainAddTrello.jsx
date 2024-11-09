import React, { useState } from "react";
import styled from "styled-components";
import { GrCheckmark } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";

export const MainAddTrello = ({ cartTitle, id, onUpdate }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(cartTitle);

  const updateHandler = () => {
    if (newTitle.trim() === "") return;
    onUpdate({ id, cartTitle: newTitle });

    setIsEdit(false);
  };

  const handleEditing = () => {
    setIsEdit(true);
  };

  return (
    <StyledText>
      {isEdit ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={updateHandler}
        />
      ) : (
        <span>{cartTitle}</span>
      )}

      <article>
        {isEdit ? (
          <GrCheckmark onClick={updateHandler} className="man" />
        ) : (
          <LuPencilLine onClick={handleEditing} className="man" />
        )}
      </article>
    </StyledText>
  );
};

const StyledText = styled.div`
  width: 256px;
  height: fit-content;
  background-color: var(--ds-surface-raised, #ffffff);
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  input {
    color: black;
    width: 256px;
    height: 32px;
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid #5e5e5e;
    font-size: 14px;
    border: none;
  }

  .man {
    cursor: pointer;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #b6b6b6b1;
      border-radius: 4px;
    }
  }
`;
