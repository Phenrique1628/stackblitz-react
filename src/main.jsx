import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx';
import AuthMiddleware from './Middleware.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<AuthMiddleware/>}>
      <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
