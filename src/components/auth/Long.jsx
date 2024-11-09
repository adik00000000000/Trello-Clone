import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInRequest } from "../../store/thunk/authThunks";
import { ErrorMessages } from "../UI/ErrorMessages";
import { ClockLoader } from "react-spinners";
import { MyButton } from "../UI/myButton";

export const Long = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((store) => store.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (userData) => {
    dispatch(signInRequest({ userData, navigate }));
  };

  return (
    <StyledContainer>
      {isLoading && (
        <LongDom>
          <ClockLoader color="#ffffff" size={150} />
        </LongDom>
      )}
      <form onSubmit={handleSubmit(submitHandler)}>
        <h3>Вход в Trello </h3>
        <div>
          <input
            type="text"
            placeholder="Укажите адрес электронной почты"
            {...register("email", {
              required: {
                value: true,
                message: "Введите email",
              },
              pattern: {
                message: "неправильный email",
              },
            })}
          />
          <ErrorMessages>{errors?.email?.message}</ErrorMessages>

          <input
            type="text"
            placeholder="Введите пароль"
            {...register("password", {
              required: { value: true, message: "Введите пароль" },
              minLength: {
                value: 6,
                message: "Пароль должен быть не менее 6 чисел",
              },
              maxLength: {
                value: 10,
                message: "Слишком длинный пароль",
              },
            })}
          />
          <ErrorMessages>{errors?.password?.message}</ErrorMessages>

          <MyButton variant="contained" color="success" type="submit">
            Продолжить
          </MyButton>
        </div>
        <a>
          <Link to={"/register"}>Зарегистрироваться</Link>
        </a>
      </form>
      <article>
        <p>Политика конфиденциальности</p>
        <p>Условия использование</p>
      </article>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 111vh;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;

  & > form {
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    & > h3 {
      color: #333;
      font-size: 34px;
      font-weight: 700;
    }

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      & > input {
        width: 100%;
        height: 55px;
        border-radius: 10px;
        border: 2px solid #ddd;
        padding-left: 20px;
        font-size: 20px;
        color: #333;
        transition: border 0.4s;

        &:focus {
          border-color: #5cb85c;
          outline: none;
        }
      }
    }
  }

  a {
    color: #5cb853;
    text-decoration: none;
    font-size: 25px;
    margin-top: 15px;
    transition: color 0.3s;

    &:hover {
      color: #18b26f;
    }
  }

  & > article {
    margin-top: 25px;
    display: flex;
    gap: 20px;

    & > p {
      color: #33bcc3;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #19a337;
      }
    }
  }
`;

const LongDom = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(27, 19, 19, 0.6);
  display: flex;
  justify-content: center;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
