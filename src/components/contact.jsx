"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o9gu3su",
        "template_6gck96l",
        e.target,
        "zrAf9_v_bNgVVlcWX"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email failed to send:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto bg-white my-12">
      <h2 className="text-2xl font-semibold mb-6 text-primary">Contact Us</h2>
      <div className="flex gap-10">
        <div className="w-full md:w-1/2 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.819280106444!2d90.41380137607314!3d23.753823078668006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b87c620678a3%3A0x2d465bdd5ca36c00!2s102%2FB%20Chowdhuripara%20Residential%20Area%2C%20Dhaka%201219!5e0!3m2!1sen!2sbd!4v1724829448745!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              width: "100%",
              height: "100%",
              border: "0",
            }}
          ></iframe>
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-1/2">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0060e3] focus:border-[#0060e3] sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0060e3] focus:border-[#0060e3] sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0060e3] focus:border-[#0060e3] sm:text-sm"
              rows="4"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#0060e3] text-white font-semibold rounded-md shadow hover:bg-[#0050c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0060e3]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
