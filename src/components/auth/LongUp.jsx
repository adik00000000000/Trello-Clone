import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { singUpRequest } from "../../store/thunk/authThunks";
import { MyButton } from "../UI/myButton";
import { ErrorMessages } from "../UI/ErrorMessages";
import { ClockLoader } from "react-spinners";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      firstName: "",
      lastName: "",
    },
  });

  const submitHandler = (userData) => {
    dispatch(singUpRequest({ userData, navigate }));
  };

  return (
    <StyledContainer>
      {isLoading && (
        <LoaderOverlay>
          <ClockLoader color="#ffffff" size={150} />
        </LoaderOverlay>
      )}
      <form onSubmit={handleSubmit(submitHandler)}>
        <h3>Вход в Trello </h3>
        <div>
          <input
            type="text"
            placeholder="Введите имя"
            {...register("firstName", { required: "Введите имя" })}
          />
          <ErrorMessages>{errors?.firstName?.message}</ErrorMessages>

          <input
            type="text"
            placeholder="Введите фамилию"
            {...register("lastName", { required: "Введите фамилию" })}
          />
          <ErrorMessages>{errors?.lastName?.message}</ErrorMessages>

          <input
            type="text"
            placeholder="Укажите адрес электронной почты"
            {...register("email", {
              required: {
                value: true,
                message: "Введите email",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
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
          <Link to={"/login"}>Войти</Link>
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
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  & > form {
    width: 100%;
    max-width: 400px;
    background-color: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    & > h3 {
      color: #333;
      font-size: 24px;
      font-weight: 600;
    }
    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;

      & > input {
        width: 100%;
        height: 45px;
        border-radius: 8px;
        border: 1px solid #ddd;
        padding-left: 15px;
        font-size: 16px;
        color: #333;
        transition: border 0.3s;

        &:focus {
          border-color: #5cb85c;
          outline: none;
        }
      }
    }
  }

  a {
    color: #5cb85c;
    text-decoration: none;
    font-size: 16px;
    margin-top: 10px;
    transition: color 0.3s;

    &:hover {
      color: #1c661c;
    }
  }

  & > article {
    margin-top: 20px;
    display: flex;
    gap: 15px;

    & > p {
      color: #5cb85c;
      font-size: 15px;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #4cae4c;
      }
    }
  }
`;

const LoaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
