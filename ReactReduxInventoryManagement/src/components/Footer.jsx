import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full bg-white border-t mt-16 py-8 shadow-inner"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            Inventory Management System 🚀
          </h2>
          <p className="text-gray-500 text-md font-medium">
            Made with <span className="text-red-500">💙</span> by{' '}
            <a
              href="https://github.com/abdullahbutt09"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @abdullahbutt09
            </a>
          </p>
        </div>

        {/* Right Side: CENTERED Button + Icons */}
        <div className="flex flex-col items-center text-center gap-3 w-full md:w-auto">
          <a
            href="https://github.com/abdullahbutt09/react-IMS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition"
          >
            ⭐ View Source Code on GitHub
          </a>

          <div className="flex justify-center gap-4 text-gray-600 text-lg mt-2">
            <FooterIcon icon={FaGithub} link="https://github.com/abdullahbutt09" />
            <FooterIcon icon={FaLinkedin} link="https://linkedin.com/in/yourprofile" />
            <FooterIcon icon={FaTwitter} link="https://twitter.com/yourhandle" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

const FooterIcon = ({ icon: Icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 transition"
  >
    <Icon size={27} />
  </a>
);

export default Footer;