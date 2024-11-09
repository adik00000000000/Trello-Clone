import { CgMenuGridR } from "react-icons/cg";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../store/slice/trelloSlice";
import { HeaderList } from "./HeaderList";
import { headerIcons } from "../../utils/constants/general";


export const Header = () => {
  const dispatch = useDispatch();

  const openModHead = () => {
    dispatch(modalOpen());
  };

  return (
    <StyledHeader>
      <div className="headerlong">
        <section>
          <CgMenuGridR className="heaaad" />
          <img
            src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
            alt=""
          />
        </section>
        <ul>
          {headerIcons.map((item) => (
            <HeaderList key={item.id} title={item.title} />
          ))}
        </ul>
      </div>
      <div className="head">
        <FaRegUserCircle className="head" onClick={openModHead} />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #4e3939;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  img {
    width: 88px;
    height: 26px;
  }

  ul,
  section {
    display: flex;
    align-items: center;
    gap: 22px;
    cursor: pointer;
  }

  .headerlong {
    display: flex;
    gap: 22px;
  }

  .head {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .heaaad {
    color: #908282;
    font-size: 30px;
    cursor: pointer;
  }
`;
