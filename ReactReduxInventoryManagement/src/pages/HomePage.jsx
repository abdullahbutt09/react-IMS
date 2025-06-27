import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, PlusCircle, RefreshCw, BarChart } from 'lucide-react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo === 'features') {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, [location]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 px-4 bg-gradient-to-br from-blue-50 to-white"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Inventory Management System
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A modern, fast, and user-friendly web app to manage your products efficiently — add, edit, delete, and view your inventory in real time.
        </p>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-white">
  <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">🔧 What You Can Do</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <FeatureCard
        icon={<Boxes size={40} className="mx-auto text-blue-600" />}
        title="View Inventory"
        desc="Track all your products with real-time listing."
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <FeatureCard
        icon={<PlusCircle size={40} className="mx-auto text-green-600" />}
        title="Add Products"
        desc="Add new items with name, price, quantity, and category."
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <FeatureCard
        icon={<RefreshCw size={40} className="mx-auto text-yellow-600" />}
        title="Edit or Remove"
        desc="Update stock or delete items as needed."
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <FeatureCard
        icon={<BarChart size={40} className="mx-auto text-purple-600" />}
        title="Live Stats"
        desc="Get automatic stats like low stock and total value."
      />
    </motion.div>
  </div>
</section>

      {/* Call to Action */}
      <motion.div
        id="start"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className="text-center py-12"
      >
        <h4 className="text-2xl font-semibold mb-7 text-gray-700">Ready to manage your inventory?</h4>
        <Link to="/inventory" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold">
          Launch App 🚀
        </Link>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gray-50 border border-gray-200 rounded-2xl text-center shadow-sm"
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
    <p className="text-gray-600 mt-2">{desc}</p>
  </motion.div>
);

export default Home;