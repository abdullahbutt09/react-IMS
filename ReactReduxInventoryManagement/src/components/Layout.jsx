// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer'; // ✅ Import Footer

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* ✅ Navbar stays on top */}

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer repoLink="https://github.com/abdullahbutt09/react-IMS" />
    </div>
  );
};

export default Layout;