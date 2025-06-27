import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Features/InventorySlice';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: '',
    category: ''
  });

   const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

        if (!product.name || !product.quantity || !product.price || !product.category) {
        alert('Please fill in all fields');
        return;
    }

    dispatch(addProduct(product));
    setProduct({ name: '', quantity: '', price: '', category: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-xl mt-10"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">➕ Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input name="name" placeholder="Product Name" value={product.name} onChange={handleChange} />
          <Input name="quantity" placeholder="Quantity" type="number" value={product.quantity} onChange={handleChange} />
          <Input name="price" placeholder="Price" type="number" value={product.price} onChange={handleChange} />
          <Input name="category" placeholder="Category" value={product.category} onChange={handleChange} />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-xl font-semibold shadow hover:bg-green-600 transition"
        >
          Add Product
        </motion.button>
      </form>
    </motion.div>
  );
};

const Input = ({ name, value, onChange, placeholder, type = "text" }) => (
  <motion.input
    whileFocus={{ scale: 1.02 }}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
  />
);

export default AddProduct;