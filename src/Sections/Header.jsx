"use client";

import React, { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const closeNavbar = () => setToggle(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const toggleIcon = () => {
    setIconToggle(!iconToggle);
  };

  useEffect(() => {
    setMenuClass(
      toggle
        ? "transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100"
        : "transition-opacity ease-in-out duration-300 transform -translate-y-full opacity-0"
    );
  }, [toggle]);

  return (
    <section className=" text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40">
      <Link href="/">
        <h2 className="text-white text-center font-[Salsa] text-[24px] font-normal leading-none italic whitespace-nowrap">
          Apex Academy
        </h2>
      </Link>

      <div className="hidden lg:flex justify-between items-center gap-4 mx-auto flex-grow">
        <ul className="flex justify-center items-center gap-3 text-white flex-grow">
          <Link href="/" >
            <div className="text-[#EFEFEF] font-normal text-[14px] leading-[24px] font-[Poppins]">
              Home
            </div>
          </Link>
          <Link href="#about" >
            <div className="text-[#EFEFEF] font-normal text-[14px] leading-[24px] font-[Poppins]">
               About Us
            </div>
          </Link>
          <Link href="">
            <div className="text-[#EFEFEF] font-normal text-[14px] leading-[24px] font-[Poppins]">
              Tutorials
            </div>
          </Link>
          <li>
            <a className="text-[#EFEFEF] font-normal text-[14px] leading-[24px] font-[Poppins]">
              Blog
            </a>
          </li>
        </ul>
        <div className=" hidden lg:flex justify-end items-center font-bold">
          <Link href="https://www.kralis.app">
            <button className="bg-white  text-[#4466E3] text-[18px] rounded-full px-4 lg:px-8 py-3 cursor-pointer  transform hover:translate-y-1">
              Portal
            </button>
          </Link>
        </div>
      </div>

      <div className="flex lg:hidden flex-col text-white m-2">
        {iconToggle ? (
          <RiMenu2Line
            className="h-8 w-8 text-[#FFFFFF]"
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        ) : (
          <RiMenu2Line
            className="h-8 w-8 text-[#FFFFFF]"
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        )}

        {toggle && (
          <div
            id="mob-menu"
            className={`bg-[#010531] text-white py-4 absolute top-20 right-0 w-full ${menuClass}`}
          >
            <ul className="flex flex-col justify-center items-center gap-2">
              <Link
                href="/"
                className="text-xl text-white font-semibold hover:text-white w-full py-3 px-4"
                onClick={closeNavbar}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-xl text-white font-semibold hover:text-white w-full py-3 px-4"
                onClick={closeNavbar}
              >
                About Us
              </Link>
              <Link
                href="https://www.kralis.app/lms"
                className="text-xl text-white font-semibold hover:text-white w-full py-3 px-4"
                onClick={closeNavbar}
              >
                Tutorials
              </Link>
              <li className="text-xl text-white font-semibold hover:text-white w-full py-3 px-4">
                <Link href="/" onClick={closeNavbar}>
                  Blog
                </Link>
              </li>

              <button className="text-[#4466E3] bg-white py-3 px-4 transition-all duration-300 rounded-full  inline-flex w-[80%] text-center justify-center items-center text-xl font-bold mb-5 mt-5 transform hover:translate-y-1 ">
                <Link href="https://www.kralis.app">
                  Portal
                </Link>
              </button>
            </ul>
            <div className="space-x-12 hidden lg:flex items-center"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
