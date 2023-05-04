import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/chakra.theme';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/Auth/AuthContext';
import VehicleProvider from './contexts/Vehicle/VehicleContexts';
import KenzieApiProvider from './contexts/kenzieApi/kenzieApiContext';
import ResetPasswordProvider from './contexts/ResetPassword/ResetPasswordContext';
import CommentProvider from './contexts/Comment/commentContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <ResetPasswordProvider>
            <VehicleProvider>
              <KenzieApiProvider>
                <CommentProvider>
                  <App />
                </CommentProvider>
              </KenzieApiProvider>
            </VehicleProvider>
          </ResetPasswordProvider>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
