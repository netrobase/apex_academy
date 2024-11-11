import React from 'react';
import Image from 'next/image';
import Link from "next/link";


const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center gap-4 w-full h-auto lg:h-screen overflow-hidden">
      {/* Image Section with Slanted Background and Foreground Image */}
      <div className="relative flex justify-center items-center w-full lg:w-1/2 order-1 lg:order-2 px-5 py-0">
        
        {/* Background Slanted Image */}
        <div data-aos="fade-right"
          className="absolute transform rotate-[-5deg] left-0 top-0 rounded-lg opacity-80"
          style={{ width: '434px', height: '434px', backgroundColor: 'rgba(40, 85, 166, 0.20)', zIndex: 0 }} 
        ></div>

        {/* Foreground Image (Boy with Books) */}
        <div className="relative transform rotate-[5deg] z-10" data-aos="fade-left">
          <Image 
            src="/images/hero.png" 
            alt="Boy with Books"
            width={534}
            height={534}
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex justify-center items-start flex-col gap-6 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20 order-2 lg:order-1 self-stretch" data-aos="fade-right">
        <h1 className="text-[#F9F9F9] font-poppins text-5xl font-normal leading-[126%]">
          Welcome to Apex Academy
        </h1>
        <p className="text-[#DEDEDE] font-poppins text-[18px] font-normal leading-[190%]">
          Your ultimate school management solution, with lifetime access on mobile and desktop
        </p>
        <Link href="https://www.kralis.app">
        <div className="flex justify-center w-full md:block"> 
          <button className="bg-[#334DCD] text-white text-[18px] rounded-full px-4 py-3 cursor-pointer w-full sm:w-auto transform hover:translate-y-1">
             Result Portal
          </button>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
