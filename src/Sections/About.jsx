import React from 'react';

const About = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat mx-auto max-w-[1440px]"
      style={{ backgroundImage: "url('/images/about-bg.png')" }}
    >
      <div className="relative z-10 text-white p-10 rounded-lg max-w-3xl mx-auto" data-aos="zoom-in">
        <h2 className="text-white text-center font-poppins text-5xl font-semibold leading-normal">
          About Us
        </h2>
        <p className="text-white text-justify font-poppins text-2xl font-normal leading-normal">
          Kralis is a revolutionary School Result Management System (SRMS) that streamlines
          administrative tasks, enhances student engagement, and fosters academic success.
        </p>
        <p className="text-white text-justify font-poppins text-2xl font-normal leading-normal mt-4">
          Here are some of the limitations Kralis aims to overcome:
        </p>
        <ul className="list-disc list-inside text-white text-justify font-poppins text-2xl font-normal leading-normal mt-4">
          <li>Limited customization options for report formats and templates.</li>
          <li>Initial setup and implementation may require technical expertise.</li>
          <li>Lack of real-time updates and notifications for students, parents, and teachers.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
