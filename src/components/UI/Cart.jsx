import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const Cart = ({ closeCartHandler, deleteCardHandler }) => {
  return (
    <CartContener>
      <span>
        <CloseNon onClick={closeCartHandler} />
      </span>
      <p>Добавить карточку</p>
      <p onClick={deleteCardHandler}>Архивировать</p>
      <p>Подписаться</p>
      <p>Копировать</p>
    </CartContener>
  );
};

const CartContener = styled.div`
  width: 280px;
  height: 250px;
  position: absolute;
  left: 250px;
  top: 40px;
  background-color: #eee2e2c3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  color: #615f5fda;
  padding-top: 20px;
  p {
    cursor: pointer;
    height: 40px;

    &:hover {
      width: 100%;
      height: 40px;
      background-color: #aaaaaac6;
    }
  }
`;

const CloseNon = styled(GrClose)`
  margin-left: 15px;
  cursor: pointer;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: #172b4d;
  }
`;
