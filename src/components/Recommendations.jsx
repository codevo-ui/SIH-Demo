import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Recommendations = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const recommendations = [
    {
      id: 1,
      company: "TCS",
      location: "Mumbai",
      skills: "React, Node.js",
      match: "92%",
    },
    {
      id: 2,
      company: "Gujarat Information Limited RTO",
      location: "Ahmedabad",
      skills: "Java, SQL",
      match: "87%",
    },
    {
      id: 3,
      company: "Infosys",
      location: "Bangalore",
      skills: "Python, Django",
      match: "85%",
    },
  ];

  const handleClick = (id) => {
    setSelected(id);
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Top 3 Recommendations for {formData.username || "You"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            onClick={() => handleClick(rec.id)}
            className={`cursor-pointer border rounded-2xl shadow-md p-6 hover:shadow-lg transition ${
              selected === rec.id ? "border-blue-600" : "border-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{rec.company}</h3>
            <p className="text-gray-600">📍 {rec.location}</p>
            <p className="text-gray-600">💻 {rec.skills}</p>
            <p className="text-blue-600 font-bold mt-2">Match: {rec.match}</p>
          </div>
        ))}
      </div>

      {submitted && (
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-green-600">
            ✅ Application Submitted Successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
