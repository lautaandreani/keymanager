import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom";
import App from "./App";
const domain = import.meta.env.VITE_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_CLIENTID_AUTH;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
