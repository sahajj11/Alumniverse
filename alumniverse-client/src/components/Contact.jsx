import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-100 to-blue-300 text-center px-6">
      <h3 className="text-3xl font-bold mb-4">Want Alumniverse for Your College?</h3>
      <p className="mb-6 text-lg">
        We’d love to hear from you. Drop a message and let's connect.
      </p>
      <a
        href="mailto:your@email.com"
        className="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition"
      >
        Contact Us
      </a>
    </section>
  );
};

export default Contact;
