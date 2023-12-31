import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Checkout from "./pages/Checkout";
import CafeMenu from "./pages/CafeMenus";
import UserDetails from "./pages/UserDetails";
import Thankyou from "./pages/Thankyou";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <CafeMenu />,
  },
  {
    path: "/user-details",
    element: <UserDetails />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "thankyou",
    element: <Thankyou />,
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="menu">
        <main>
          <h1>KITKAT CAFE</h1>
          <p className="established">Est. 2020</p>
          <hr />
          <RouterProvider router={router} />
        </main>
        <hr className="bottom-line" />
        <footer>
          <p>
            <a
              href="https://www.freecodecamp.org"
              target="_blank"
              rel="noreferrer"
            >
              Visit our website
            </a>
          </p>
          <p className="address">123 Free Code Camp Drive</p>
        </footer>
      </div>
    </Provider>
  </React.StrictMode>
);
