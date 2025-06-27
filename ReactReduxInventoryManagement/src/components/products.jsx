import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearInventory, removeProduct, updateProduct } from '../Features/InventorySlice';
import { motion } from 'framer-motion';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.inventory.products);

  const handleUpdate = (prod) => {
  const newName = prompt("Update Product Name:", prod.name);
  const newQty = prompt("Update Quantity:", prod.quantity);
  const newPrice = prompt("Update Price:", prod.price);
  const newCat = prompt("Update Category:", prod.category);

  dispatch(updateProduct({
    id: prod.id,
    name: newName || prod.name,
    quantity: Number(newQty) || prod.quantity,
    price: Number(newPrice) || prod.price,
    category: newCat || prod.category
  }));
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="max-w-6xl mx-auto mt-8 p-4 sm:p-6 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">📋 Product Inventory</h2>

      {/* Desktop Table */}
      {products?.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <>
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border border-gray-200 rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod) => (
                  <tr key={prod.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{prod.name}</td>
                    <td className="px-4 py-2">{prod.quantity}</td>
                    <td className="px-4 py-2">Rs {prod.price}</td>
                    <td className="px-4 py-2">{prod.category}</td>
                    <td className="px-4 py-2 text-center space-x-2">
                      <ActionButton color="blue" onClick={() => handleUpdate(prod)}>Update</ActionButton>
                      <ActionButton color="red" onClick={() => dispatch(removeProduct(prod.id))}>Delete</ActionButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden space-y-4">
            {products.map((prod) => (
              <div key={prod.id} className="border p-4 rounded-xl shadow-md">
                <div><strong>Name:</strong> {prod.name}</div>
                <div><strong>Quantity:</strong> {prod.quantity}</div>
                <div><strong>Price:</strong> Rs {prod.price}</div>
                <div><strong>Category:</strong> {prod.category}</div>
                <div className="mt-3 flex gap-3">
                  <ActionButton color="blue" onClick={() => handleUpdate(prod)}>Update</ActionButton>
                  <ActionButton color="red" onClick={() => dispatch(removeProduct(prod.id))}>Delete</ActionButton>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="text-center mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => dispatch(clearInventory())}
          className="bg-gray-600 text-white px-6 py-2 rounded-xl shadow hover:bg-gray-700"
        >
          🗑️ Clear Inventory
        </motion.button>
      </div>
    </motion.div>
  );
};

const ActionButton = ({ children, onClick, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`text-white px-3 py-1 rounded-xl shadow font-medium transition ${colors[color]}`}
    >
      {children}
    </motion.button>
  );
};

export default Products;