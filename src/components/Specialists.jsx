import React from 'react';
import { specialists } from '../utils/data';

const Specialists = () => {
  return (
    <section id="specialists" className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Meet Our Specialists</h2>
      <p className="text-blue-800 mb-10 max-w-xl mx-auto">
        Our expert medical team is here to serve you with compassion and excellence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {specialists.map((doc, index) => (
          <div key={index} className="bg-white rounded-xl shadow hover:shadow-xl transition">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-900">{doc.name}</h3>
              <p className="text-blue-700 text-sm">{doc.dept}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialists;
