import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import { UserContextProvider } from '@/userContext.tsx';
import { QueryProvider } from '@/QueryProvider/QueryProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <QueryProvider />
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);
