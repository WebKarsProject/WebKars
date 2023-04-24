import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/chakra.theme";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/Auth/AuthContext";
import { VehicleProvider } from "./contexts/Vehicle/VehicleContexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <VehicleProvider>
            <App />
          </VehicleProvider>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
