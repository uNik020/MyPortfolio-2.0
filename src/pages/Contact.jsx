import React from 'react'
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "your_service_id", // Replace with your EmailJS Service ID
          "your_template_id", // Replace with your EmailJS Template ID
          formRef.current,
          "your_public_key" // Replace with your EmailJS Public Key
        )
        .then(
          () => {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            setStatus("Failed to send message. Please try again.");
            console.error(error);
          }
        );
    };
  
    return (
      <section id="contact" className="w-full py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl bruno-ace-sc font-extrabold text-center text-gray-900 dark:text-white"
          >
            Contact Me
          </motion.h2>
  
          <p className="text-lg text-center mt-4 text-gray-700 dark:text-gray-300">
            Have a project or just want to say hi? Let's talk!
          </p>
  
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div>
              <label className="block text-gray-900 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded-lg border focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
  
            <div>
              <label className="block text-gray-900 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded-lg border focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
  
            <div>
              <label className="block text-gray-900 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 mt-1 rounded-lg border focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
  
            {status && <p className="text-center text-green-500 dark:text-green-400 mt-2">{status}</p>}
          </motion.form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  