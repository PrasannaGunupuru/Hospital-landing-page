import React from 'react';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {}
      <div className="w-full h-auto md:h-[100px] px-6 md:px-[121px] border-b border-blue-100 flex flex-col md:flex-row justify-between items-start md:items-center py-6 md:py-0">
        {}
        <div className="text-[34px] font-bold leading-[1] font-sans mb-4 md:mb-0">
          <span className="text-[#1A3A61]">Medi</span>
          <span className="text-[#FF6D3D]">Care+</span>
        </div>

        {}
        <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-12 text-[#1A3A61] font-medium text-sm">
          <li><a href="#home" className="hover:text-[#FF6D3D] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#FF6D3D] transition">About</a></li>
          <li><a href="#services" className="hover:text-[#FF6D3D] transition">Services</a></li>
          <li><a href="#contact" className="hover:text-[#FF6D3D] transition">Contact</a></li>
        </ul>
      </div>

      {}
      <div className="w-full bg-[#ECF4FF] py-[60px] md:py-[100px]">
        <div className="w-full px-6 md:px-[121px]">
          {}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="bg-white text-blue-700 p-3 rounded-full shadow hover:scale-110 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-white text-blue-700 p-3 rounded-full shadow hover:scale-110 transition">
              <FaGoogle size={20} />
            </a>
            <a href="#" className="bg-white text-blue-700 p-3 rounded-full shadow hover:scale-110 transition">
              <FaTwitter size={20} />
            </a>
          </div>

          {}
          <p className="text-sm text-[#1A3A61] mt-6">
            © {new Date().getFullYear()} MediCare+ (UI103)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
