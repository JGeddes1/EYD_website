import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We provide custom web development services, creating responsive, high-performance websites tailored to your needs.",
      icon: "🌐", // Replace with an actual icon or image if desired
    },
    {
      title: "Mobile App Development",
      description:
        "Our team builds mobile applications for iOS and Android, focusing on user-friendly design and robust functionality.",
      icon: "📱", // Replace with an actual icon or image if desired
    },
    {
      title: "SEO Optimization",
      description:
        "We help improve your website's search engine rankings with targeted SEO strategies, increasing your visibility online.",
      icon: "📈", // Replace with an actual icon or image if desired
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
