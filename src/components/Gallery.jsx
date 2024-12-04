import React, { useState } from "react";

const Gallery = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "This is the first project description.",
      image: "src/assets/Designer (1).png",
    },
    {
      id: 2,
      title: "Project Two",
      description: "This is the second project description.",
      image: "https://via.placeholder.com/300x200?text=Project+2",
    },
    {
      id: 3,
      title: "Project Three",
      description: "This is the third project description.",
      image: "https://via.placeholder.com/300x200?text=Project+3",
    },
    {
      id: 1,
      title: "Project four",
      description: "This is the first project description.",
      image: "https://via.placeholder.com/300x200?text=Project+4",
    },
    {
      id: 2,
      title: "Project five",
      description: "This is the second project description.",
      image: "https://via.placeholder.com/300x200?text=Project+5",
    },
    {
      id: 3,
      title: "Project six",
      description: "This is the third project description.",
      image: "https://via.placeholder.com/300x200?text=Project+6",
    },
    // Add more projects as needed
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      className="p-8"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
    >
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-300 bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <h2 className="text-white font-bold text-lg">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
            {/* Modal Content */}
            <button
              className="absolute top-4 right-4 text-black text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedProject.title}</h2>
            <p className="mt-2 text-gray-600">{selectedProject.description}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
