import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../shared/layout/mainlayout";
import Author from "../pages/author";
import HomeBooks from "../pages/homeBooks";
import AboutWriters from "../components/authorItems/aboutWriters";
import AboutBook from "../components/books/aboutBook";
import Profile from "../pages/profile/profile";
import Account from "../pages/profile/account";
import SignUp from "../pages/signUp";
import LogIn from "../pages/logIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Author />,
      },
      {
        path: "/books",
        element: <HomeBooks />,
      },
      {
        path: "/about_writer/:id",
        element: <AboutWriters />,
      },
      {
        path: "/about_book/:bookId",
        element: <AboutBook />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <p>404 page</p>,
      },
    ],
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/logIn",
    element: <LogIn />,
  },
]);
