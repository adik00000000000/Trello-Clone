import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalClose } from "../../store/slice/trelloSlice";
import { MyButton } from "../UI/myButton";
import { logOut } from "../../store/slice/authSlice";
import { Modal } from "../UI/Modal";

export const ModHead = () => {
  const dispatch = useDispatch();

  const closeModHead = () => {
    dispatch(modalClose());
  };

  return (
    <Modal onClick={closeModHead}>
      <CartContent>
        <h2>Вы действительно хотите выйти?</h2>
        <section>
          <MyButton onClick={() => dispatch(logOut())}>Да</MyButton>
          <MyButton onClick={closeModHead}>нет</MyButton>
        </section>
      </CartContent>
    </Modal>
  );
};

const CartContent = styled.div`
  width: 400px;
  height: 250px;
  background-color: #2f2727;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  overflow: auto;
  text-align: center;
  color: white;

  section {
    display: flex;
    gap: 50px;
  }
`;
