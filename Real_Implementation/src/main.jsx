import { lazy, StrictMode, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import RouteErrorPage from "./components/RouteErrorPage.jsx";
import Login from "./components/AuthPage/Login.jsx";
import SignUp from "./components/AuthPage/SignUp.jsx";
// import Products from './Products/Products.jsx'

// applying code splitting concept
const Products = lazy(() => import("./Products/Products.jsx"));
const SingleProduct = lazy(()=>import("./Products/ProductDetails.jsx"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={RouteErrorPage}>
      <Route index element={ <SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="products" element={<Suspense fallback={<p>Data is Loading...</p>}>
      <Products />
      </Suspense>} />
      <Route path="product/:productId" element={<SingleProduct />} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
      <App />
  </StrictMode>,
);
