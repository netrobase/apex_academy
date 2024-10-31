import React from 'react';

const About = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat mx-auto max-w-[1440px]" 
             style={{ backgroundImage: "url('/images/about-bg.png')" }}>
      <div className="relative z-10 text-white p-10  rounded-lg max-w-3xl mx-auto">
        <h2 className="text-white text-center font-poppins text-5xl font-semibold leading-normal">About Us</h2>
        <p className="text-white text-justify font-poppins text-2xl font-normal leading-normal">
        Kralis is a revolutionary School Result Management System (SRMS) that streamlines administrative tasks, enhances student engagement, and fosters academic success. Designed to address the shortcomings of traditional paper-based and existing SRMS systems, Kralis offers a comprehensive solution for educational institutions of all sizes.

Here are some of the limitation, Kralis aims to overcome;
Limited customization options for report formats and templates.
Initial setup and implementation may require technical expertise.
Lack of real-time updates and notifications for students, parents, and teachers.
Lack of integration with other educational tools like cbt, lms, etc.
Difficulty in handling non-standard grading systems or academic structures.
Potential learning curve for users unfamiliar with digital result management systems.

These limitations motivated us to provide a robust, user-friendly solution. Whether you're a school administrator seeking to modernize exam processes or a student striving for academic excellence, Kralis is your comprehensive solution.



        </p>
      </div>
    </section>
  );
};

export default About;
