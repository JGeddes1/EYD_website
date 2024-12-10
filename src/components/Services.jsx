import React from "react";
import Tilt from "react-parallax-tilt";

const Services = () => {
  const services = [
    {
      title: "Planning",
      description: [
        "Home visit and advice",
        "Research on materials & exemplar designs",
        "Measured survey of the property",
        "Existing plans and elevations drawn to scale",
        "Client ideas & proposals drawn to scale",
        "Design experience in the local area, ideas and architectural support",
        "Amendments to drawings",
        "To complete the local authority planning application forms",
        "Submission & liaison with Planning Authority",
        "Additional copies of planning/permitted development drawings",
      ],
      icon: "📋", // Replace with an actual icon or image if desired
    },
    {
      title: "Building Regulations Support",
      description: [
        "Detailed technical drawings and notes for Building Control/Builder",
        "Drawings include locations of electrical sockets, switches, radiators, etc.",
        "Liaising with structural engineer and other professionals",
        "Submission & liaison with Local Authority Building Control",
        "Additional copies of Building Regulations drawings",
        "Revisions to drawings as necessary",
        "Further copies of Building Regulations approved plans for builders",
      ],
      icon: "🏗️",
    },
  ];

  return (
    <section
      id="services"
      className="py-12 px-6 bg-white"
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12">
          Discover the range of services we offer to help your business thrive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.5}
              glareColor="#ffffff"
              glarePosition="bottom"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05} // Slight zoom on hover
            >
              <div className="bg-slate-100 bg-opacity-65 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2 text-gray-700"
                    >
                      <span className="text-blue-500 ">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
