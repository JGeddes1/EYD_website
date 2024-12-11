import emailjs from "emailjs-com";
import React, { useState } from "react";
import MapWithMarker from "./MapWithMarker";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success or error message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to EmailJS
    emailjs
      .sendForm(
        "service_hae5slq", // Replace with your EmailJS service ID
        "template_bmhid93", // Replace with your EmailJS template ID
        e.target,
        "hIRtwJZCOGz4oeqeH" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent: ", result.text);
          setStatus("Success! Your message has been sent.");
          setFormData({ name: "", location: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error sending email: ", error.text);
          setStatus("Error! Something went wrong, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-12 px-6 bg-gray-100"
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <div className="container mx-auto flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
        {/* Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            If you live within the highlighted location area, we'd love to hear
            from you! Please fill out the form below or call us directly.
          </p>
          <p className="text-gray-800 font-semibold mb-6">
            📞 Phone:{" "}
            <a
              href="tel:+44078009381466"
              className="text-blue-500 hover:underline"
            >
              07800938146
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-800 text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-800 text-lg mb-2">
                Project Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
                className="px-4 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-800 text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2 border rounded-lg text-gray-700"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-800 text-lg mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-2 border rounded-lg text-gray-700"
                required
              ></textarea>
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`${
                  status.includes("Success") ? "text-green-500" : "text-red-500"
                } mt-4`}
              >
                {status}
              </div>
            )}

            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Location
          </h2>
          <MapWithMarker />
        </div>
      </div>
    </section>
  );
};

export default Contact;
