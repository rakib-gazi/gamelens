import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AllReviews from "../pages/AllReviews";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import GameWatchList from "../pages/GameWatchList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateReview from "../pages/UpdateReview";
import ReviewDetails from "../pages/ReviewDetails";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "*",
        element:<ErrorPage></ErrorPage> , 
      },
      {
        path: "/",
        loader: () => fetch("https://ph-assignment-10-server-alpha.vercel.app/highest-rated-reviews"),
        element: <Home></Home>,
      },
      {
        path: "/reviews",
        loader: () => fetch("https://ph-assignment-10-server-alpha.vercel.app/reviews"),
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/review/:id",
        loader: ({ params }) =>
          fetch(`https://ph-assignment-10-server-alpha.vercel.app/review/${params.id}`),
        element: (
            <ReviewDetails></ReviewDetails>
        ),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews/:email",
        loader: ({ params }) =>
          fetch(`https://ph-assignment-10-server-alpha.vercel.app/myReviews/${params.email}`),
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        loader: ({ params }) =>
          fetch(`https://ph-assignment-10-server-alpha.vercel.app/review/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myWatchlist/:email",
        loader: ({params}) => fetch(`https://ph-assignment-10-server-alpha.vercel.app/watchList/${params.email}`),
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about-us",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
