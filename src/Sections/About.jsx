import React from 'react';

const About = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat mx-auto max-w-[1440px]"
      style={{ backgroundImage: "url('/images/about-bg.png')" }}
    >
      <div className="relative z-10 text-white p-10 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-white text-center font-poppins text-5xl font-semibold leading-normal">
          About Us
        </h2>
        <p className="text-white text-justify font-poppins text-2xl font-normal leading-normal">
          Kralis is a revolutionary School Result Management System (SRMS) that streamlines
          administrative tasks, enhances student engagement, and fosters academic success.
          Designed to address the shortcomings of traditional paper-based and existing SRMS
          systems, Kralis offers a comprehensive solution for educational institutions of all
          sizes.
          <br />
          <br />
          Here are some of the limitations Kralis aims to overcome:
          <ul>
            <li>Limited customization options for report formats and templates.</li>
            <li>Initial setup and implementation may require technical expertise.</li>
            <li>Lack of real-time updates and notifications for students, parents, and teachers.</li>
            <li>Lack of integration with other educational tools like CBT, LMS, etc.</li>
            <li>Difficulty in handling non-standard grading systems or academic structures.</li>
            <li>Potential learning curve for users unfamiliar with digital result management systems.</li>
          </ul>
          <br />
          These limitations motivated us to provide a robust, user-friendly solution. Whether
          you are a school administrator seeking to modernize exam processes or a student striving
          for academic excellence, Kralis is your comprehensive solution.
        </p>
      </div>
    </section>
  );
};

export default About;
