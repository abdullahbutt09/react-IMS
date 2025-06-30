import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaTwitter, FaInstagram, FaGithub, FaGithubSquare, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AuthPage = ({ type = 'login' }) => {
  const isLogin = type === 'login';
  const title = isLogin ? '🔐 Login to your Account' : '📝 Create an Account';
  const buttonText = isLogin ? 'Login' : 'Sign Up';
  const toggleText = isLogin ? 'Don’t have an account?' : 'Already have an account?';
  const toggleLink = isLogin ? '/signup' : '/login';
  const toggleLinkText = isLogin ? 'Sign up' : 'Log in';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">{title}</h2>

        <form className="space-y-5">
          {!isLogin && (
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          )}

          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="you@example.com"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="••••••••"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
          >
            {buttonText}
          </motion.button>
        </form>

        {/* Switch Auth Link */}
        <p className="mt-5 text-sm text-center text-gray-600">
          {toggleText}{' '}
          <Link
            to={toggleLink}
            className="text-blue-600 hover:underline font-medium"
          >
            {toggleLinkText}
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-500">or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <SocialButton icon={<FaGoogle />} />
          <SocialButton icon={<FaTwitter />} />
          <SocialButton icon={<FaInstagram />} />
          <SocialButton icon={<FaGithub />} />
          <SocialButton icon={<FaFacebook />} />
        </div>
      </motion.div>
    </div>
  );
};

const SocialButton = ({ icon }) => (
  <button className="p-3 rounded-full border border-gray-300 hover:bg-blue-600 transition hover:text-white text-lg shadow-sm text-gray-600">
    {icon}
  </button>
);

export default AuthPage;