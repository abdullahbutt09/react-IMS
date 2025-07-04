// src/routes/AppRouter.jsx
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import NotFound from '../pages/NotFoundPage';
import Layout from '../components/Layout';
import InventoryPage from '../pages/InventoryPages';
import Login from '../pages/LoginPage';
import Signup from '../pages/SignUpPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;