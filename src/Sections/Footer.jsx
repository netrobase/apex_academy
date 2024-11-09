import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[rgba(218,228,255,0.07)] rounded-[40px] m-10 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo and Address */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Apex Academy</h2>
          <p>20 Osgood Rd, Milford, NH 03055, USA</p>
          <p>+1 283 712 3910 213021</p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Teachers</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-2">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0 justify-start md:justify-end">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
        
      </div>
      <div className=" text-center text-white/40 mt-5">&copy;  {currentYear}. Made with ❤️ <a href="https://www.netrobase.com" className='underline'> Netrobase Limited</a></div>
    </footer>
  );
};

export default Footer;
