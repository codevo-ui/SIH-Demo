import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

const Recommendations = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Full list of companies
  const companies = [
    { company: "TCS", location: "Mumbai", skills: "React, Node.js" },
    { company: "Infosys", location: "Bangalore", skills: "Python, Django" },
    { company: "Wipro", location: "Hyderabad", skills: "Java, Spring Boot" },
    { company: "Tech Mahindra", location: "Pune", skills: "Angular, .NET" },
    { company: "HCL Technologies", location: "Noida", skills: "C++, Linux" },
    { company: "Capgemini", location: "Chennai", skills: "Cloud, AWS" },
    { company: "IBM India", location: "Gurgaon", skills: "AI, Data Science" },
    { company: "Accenture", location: "Delhi", skills: "Full Stack, DevOps" },
    { company: "Cognizant", location: "Kolkata", skills: "PHP, MySQL" },
    { company: "Oracle India", location: "Bangalore", skills: "Database, PL/SQL" },
  ];

  // Generate random match % for each company
  const recommendations = useMemo(() => {
    return companies.map((rec) => ({
      ...rec,
      match: `${Math.floor(Math.random() * (95 - 70 + 1)) + 70}%`, // random % between 70–95
    }));
  }, []);

  const handleClick = (id) => {
    setSelected(id);
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Top 10 Recommendations for {formData.username || "You"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer border rounded-2xl shadow-md p-6 hover:shadow-lg transition ${
              selected === index ? "border-blue-600" : "border-gray-200"
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
