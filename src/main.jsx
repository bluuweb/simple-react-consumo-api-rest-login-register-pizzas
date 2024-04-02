import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import PizzasProvider from "./context/PizzaProvider";
import UserProvider from "./context/UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <PizzasProvider>
          <App />
        </PizzasProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
