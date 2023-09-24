import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
// import store from "../redux/store"
// import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react"

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <Auth0Provider
      domain="dev-cdhk5bfezq6dul3i.us.auth0.com"
      clientId="Bo36ti6A4aiaoAxVWAVbEhd57bRzMavV"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  );
});
