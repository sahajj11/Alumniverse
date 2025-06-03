import React from "react";

const Features = () => {
  return (
    <section className="py-16 px-6">
      <h3 className="text-3xl font-bold text-center mb-12">Why Alumniverse?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6  rounded">
          <h4 className="text-xl font-semibold mb-2">College-Specific</h4>
          <p>Every college gets its own private space — not a global platform.</p>
        </div>
        <div className="bg-white p-6  rounded">
          <h4 className="text-xl font-semibold mb-2">Secure & Private</h4>
          <p>Admin control, college email signup, and role-based access built-in.</p>
        </div>
        <div className="bg-white p-6 border-black rounded">
          <h4 className="text-xl font-semibold mb-2">Built for Connection</h4>
          <p>Designed to strengthen alumni bonding, not just collect data.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
