// src/pages/InventoryPage.jsx
import React from 'react';
import AddProduct from '../components/addProduct';
import Products from '../components/products';

const InventoryPage = () => {
  return (
    <div>
      <AddProduct />
      <Products />
    </div>
  );
};

export default InventoryPage;