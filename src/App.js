import React from "react";


import { Routes, Route } from "react-router-dom";
import Reports from "./components/Reports";
import Articles from "./components/Articles";
import Blogs from "./components/Blogs";
import Navigation from "./components/Navigation";





import './App.css'

function App() {
  return (
    <div className="Container">
        <Navigation/>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>


    </div>
  );
}

export default App;
