import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    skill: "",
    cgpa: "",
    location: "",
    techstack: "",
    languages: "",
    experience: "",
    college: "",
    class12: "",
    class10: "",
    extracurricular: "",
    preference: "",
    resume: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate AI processing delay
    setTimeout(() => {
      setLoading(false);
      navigate("/recommendations", { state: { formData } });
    }, 2500);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Enter Your Details
      </h2>

      {!loading ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <label className="block mb-2 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Skill */}
          <div>
            <label className="block mb-2 font-medium">Skill (in Tech)</label>
            <input
              type="text"
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CGPA */}
          <div>
            <label className="block mb-2 font-medium">CGPA</label>
            <input
              type="number"
              step="0.01"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block mb-2 font-medium">Tech Stack</label>
            <input
              type="text"
              name="techstack"
              value={formData.techstack}
              onChange={handleChange}
              placeholder="e.g. React, Node.js, Python"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Languages */}
          <div>
            <label className="block mb-2 font-medium">Languages</label>
            <input
              type="text"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              placeholder="e.g. English, Hindi"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 font-medium">Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g. 2 years in Web Dev"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* College */}
          <div>
            <label className="block mb-2 font-medium">College</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 12th % */}
          <div>
            <label className="block mb-2 font-medium">12th Class %</label>
            <input
              type="number"
              name="class12"
              value={formData.class12}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 10th % */}
          <div>
            <label className="block mb-2 font-medium">10th Class %</label>
            <input
              type="number"
              name="class10"
              value={formData.class10}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Extracurricular */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Extra Curricular Activities</label>
            <textarea
              name="extracurricular"
              value={formData.extracurricular}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Preference */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Preference</label>
            <input
              type="text"
              name="preference"
              value={formData.preference}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Resume Upload */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            AI is thinking...
          </p>
        </div>
      )}
    </div>
  );
};

export default InputForm;
