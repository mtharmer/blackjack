import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import store from "../redux/store"
import { Provider } from "react-redux";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
