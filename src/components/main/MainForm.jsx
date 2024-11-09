import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MyButton } from "../UI/myButton";
import { addTrello } from "../../store/slice/trelloSlice";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ErrorMessages } from "../UI/ErrorMessages";

export const MainForm = () => {
  const [openInput, setOpenInput] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      word: "",
    },
  });

  const handlAdd = (data) => {
    const newTask = {
      title: data.word,
      id: Date.now(),
      description: [],
    };
    dispatch(addTrello(newTask));

    reset();
    setOpenInput(false);
  };

  return (
    <MainFormContainer>
      {openInput ? (
        <FormMan onSubmit={handleSubmit(handlAdd)}>
          <input
            type={"text"}
            placeholder={"Введите имя колонки"}
            {...register("word", { required: "Заполните поле" })}
          />
          <ErrorMessages>{errors?.word?.message}</ErrorMessages>

          <FormAcit>
            <MyButton type="submit">Добавить список</MyButton>
            <CloseMan onClick={() => setOpenInput(false)} />
          </FormAcit>
        </FormMan>
      ) : (
        <StyledDiv>
          <MyButton onClick={() => setOpenInput(true)}>
            <FaPlus />
            <span>Добавить список</span>
          </MyButton>
        </StyledDiv>
      )}
    </MainFormContainer>
  );
};

const MainFormContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const FormAcit = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const CloseMan = styled(GrClose)`
  cursor: pointer;
  font-size: 20px;
  color: #5e6c84;

  &:hover {
    color: #172b4d;
  }
`;

const FormMan = styled.form`
  display: flex;
  flex-direction: column;
  width: 272px;
  height: fit-content;
  border-radius: 12px;
  background-color: #dcdfe4;
  padding: 10px;

  input {
    color: black;
    width: 256px;
    height: 32px;
    border-radius: 4px;
    font-weight: 600;
    border: 1px solid #5e5e5e;
    font-size: 14px;
    padding: 6px 12px;

    &:hover,
    :active {
      border: 1px solid blue;
    }
  }
`;

const StyledDiv = styled.div`
  button {
    background-color: #c5e2fc5e;
    display: flex;
    gap: 10px;
  }
`;
