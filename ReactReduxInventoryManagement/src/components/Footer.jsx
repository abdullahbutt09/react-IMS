import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Install with: npm install react-icons

const Footer = ({ repoLink }) => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-md">
            Built with 💙 by{' '}
            <a
              href="https://github.com/abdullahbutt09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              @abdullahbutt09
            </a>
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <FaGithub size={30} className="text-gray-800" />
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md font-medium text-blue-600 hover:underline"
          >
            View Source on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;