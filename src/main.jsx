import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom";
import App from "./App";
const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain={"dev-1jf4gf3t.us.auth0.com"} clientId={"x9f7LZcK7SHCpC4MGkdmwqWvLFg4v8gU"} redirectUri={window.location.origin}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
