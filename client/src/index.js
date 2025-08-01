import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/MovieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   // <React.StrictMode>
      <BrowserRouter>
         <Provider>
            <App />
         </Provider>
      </BrowserRouter>
   // </React.StrictMode>
);
