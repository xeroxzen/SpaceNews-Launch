import React from "react";
import { Routes, Route } from "react-router-dom";
import Reports from "./components/Reports";
import Articles from "./components/Articles";
import Blogs from "./components/Blogs";
import LeftNav from "./components/LeftNav";





import './App.css'

function App() {
  return (
    <div className="Container">
      <div className="left">
        <LeftNav /> 
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
