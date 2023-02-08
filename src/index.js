import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoadingProvider } from './contexts/loadingContext';
import { UserProvider } from './contexts/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </UserProvider>
);
