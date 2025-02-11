import React from "react";

const Projects = () => {
  const projects = [
    { name: "Protechsoft Technologies", link: "https://protechsoftindia.netlify.app/" },
    { name: "Campus Recruitment", link: "https://tatastrive.netlify.app/" },
    { name: "Portfolio Website", link: "https://santhoshmodi-portfolio.netlify.app/" },
    { name: "Dashboards", link: "https://instinctive-studio-frontend.vercel.app/" },
    { name: " Santhosh436 (GitHub)", link: "https://github.com/santhosh436" },
    { name: "SanthoshModi (LinkedIn)", link: "https://www.linkedin.com/in/santhoshmodi" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 my-10 bg-white shadow-lg rounded-xl font-poppins">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Check My Projects & Profiles
      </h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300 
                      before:absolute before:inset-0 before:border-2 before:border-green-800 before:rounded-lg 
                      before:scale-0 before:transition-transform before:duration-500 before:origin-center 
                      hover:before:scale-100 before:pointer-events-none"
          >
            <span className="text-lg font-medium text-gray-700">{project.name}</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-32 text-center px-4 py-2 bg-green-800 text-white text-sm font-semibold rounded-full hover:bg-gray-900 text-white transition"
            >
              {index >= 4 ? "Check" : "View Project"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
