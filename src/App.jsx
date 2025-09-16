import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Recommendations from "./components/Recommendations";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header always visible */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<InputForm />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


 
