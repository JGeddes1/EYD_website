import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const Gallery = () => {
  // Sample project data with multiple images
  const projects = [
    {
      id: 1,
      title: "Fullbeck, Morpeth",
      description:
        "Conversion of single storey farm store and office space into a 2 bed annex. The client was keen to keep as much of the existing masonry walls, services and windows in situ. This led to a pragmatic approach to room location and where kitchens etc could be located.",
      images: ["src/assets/Fullbeck/Plans.jpg"],
    },
    {
      id: 2,
      title: "Kings Avenue, Morpeth",
      description:
        "Conversion of single storey farm store and office space into a 2 bed annex. The client was keen to keep as much of the existing masonry walls, services and windows in situ. This led to a pragmatic approach to room location and where kitchens etc could be located.",
      images: [
        "src/assets/KingsAvenue/ele_1.jpg",
        "src/assets/KingsAvenue/ele_2.jpg",
      ],
    },
    {
      id: 3,
      title: "Parkside, Morpeth",
      description:
        "Conversion of single storey farm store and office space into a 2 bed annex. The client was keen to keep as much of the existing masonry walls, services and windows in situ. This led to a pragmatic approach to room location and where kitchens etc could be located.",
      images: [
        "src/assets/Parkside/0701_View_01_01.jpg",
        "https://via.placeholder.com/300x200?text=Fullbeck+2",
        "https://via.placeholder.com/300x200?text=Fullbeck+3",
      ],
    },
    {
      id: 4,
      title: "Swindale, Morpeth",
      description:
        "Conversion of single storey farm store and office space into a 2 bed annex. The client was keen to keep as much of the existing masonry walls, services and windows in situ. This led to a pragmatic approach to room location and where kitchens etc could be located.",
      images: [
        "src/assets/Swindale/0699_View_01_01.jpg",
        "https://via.placeholder.com/300x200?text=Fullbeck+2",
        "https://via.placeholder.com/300x200?text=Fullbeck+3",
      ],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Start with the first image
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const goToPreviousImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  const goToNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (currentImageIndex + 1) % selectedProject.images.length
      );
    }
  };

  return (
    <div
      className="p-8"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
    >
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img
              src={project.images[0]} // Display the first image as a preview
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-300 bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <h2 className="text-white font-bold text-lg">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-y-auto">
          <div className="relative bg-white overflow-y-auto max-h-full w-3/4 p-6 rounded-lg shadow-lg">
            <div className="flex items-center w-full">
              {/* Responsive Arrows */}
              <div className="w-1/12 flex justify-center">
                <button
                  className="text-black text-3xl font-bold z-10"
                  onClick={goToPreviousImage}
                >
                  &#9664;
                </button>
              </div>
              {/* Image */}
              <div className="h-10/12 flex justify-center">
                <InnerImageZoom
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="max-h-[80vh] object-contain rounded-lg"
                />
              </div>

              {/* Right Arrow */}
              <div className="w-1/12 flex justify-center">
                <button
                  className="text-black text-3xl font-bold z-10"
                  onClick={goToNextImage}
                >
                  &#9654;
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="container">
              <h2 className="text-2xl font-bold mt-4">
                {selectedProject.title}
              </h2>
              <p className="mt-2 text-gray-600">
                {selectedProject.description}
              </p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
