
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaClipboard, FaLaptop } from 'react-icons/fa';

export default function FeatureGrid() {
  const features = [
    {
      title: "School Information System",
      icon: <FaUserGraduate className="text-4xl text-blue-600" />,
      description: "Manages student data, including personal details, academic records, attendance, and grades. It centralizes all information related to students, allowing for efficient tracking and reporting.",
    },
    {
      title: "Staffs and Faculty Management",
      icon: <FaChalkboardTeacher className="text-4xl text-red-500" />,
      description: "Manages teacher and staff information, including schedules, roles, and professional development. It streamlines HR tasks, facilitates communication, and supports staff coordination and evaluation.",
    },
    {
      title: "Learning Management System",
      icon: <FaBook className="text-4xl text-green-600" />,
      description: "Facilitates online learning and course management. It supports the creation and distribution of educational materials, tracks student progress, and allows for interactive learning experiences.",
    },
    {
      title: "Attendance Tracking System",
      icon: <FaClipboard className="text-4xl text-blue-600" />,
      description: "Monitors student attendance and absences. This feature simplifies the process of recording attendance, generating reports, and notifying parents about their child’s attendance status.",
    },
    {
      title: "Computer Based Test (CBT)",
      icon: <FaLaptop className="text-4xl text-red-500" />,
      description: "Facilitates the administration and management of online tests and assessments. It allows for automated grading, instant feedback, and secure test-taking environments, streamlining the evaluation process.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-6 shadow-lg rounded-lg"  data-aos="fade-up">
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <h3 className="text-white font-poppins text-[20px] font-medium leading-[36px] mb-2">{feature.title}</h3>
          <p className="text-justify text-center text-gray-300 font-poppins text-base font-normal leading-[1.9]">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
