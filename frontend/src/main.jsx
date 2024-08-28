import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDom from "react-dom/client";

import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
     defaultOptions : {
          querise: {
               refetchonWindowFocus: false,
          },
     },
});

ReactDom.createRoot(document.getElementById('root')).render(
     <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
       <App />
</QueryClientProvider>
    </BrowserRouter>
     </StrictMode>,
)

