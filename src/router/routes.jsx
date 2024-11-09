import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";

import { LayoutPage } from "../layout/LayoutPage";
import { SignUpPage } from "../pages/SignUpPage";
import { PrivateRouter } from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isAuth } from "../store/slice/authSlice";

export const AppRoutes = () => {
  const { userData } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const { data } = JSON.parse(localStorage.getItem("auth")) || "";

    dispatch(isAuth(data?.email));
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRouter
              Component={<MainLayout />}
              fallBackPath={"/login"}
              isAllowed={!userData}
            />
          ),
        },
      ],
    },

    {
      path: "login",
      element: (
        <PrivateRouter
          Component={<SigninPage />}
          fallBackPath={"/"}
          isAllowed={userData}
        />
      ),
    },

    {
      path: "/register",
      element: (
        <PrivateRouter
          Component={<SignUpPage />}
          fallBackPath={"/"}
          isAllowed={userData}
        />
      ),
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
