import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Reports from "./components/Reports";
import Articles from "./components/Articles";
import Blog from "./components/Blog";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
        
      </main>
    </React.Fragment>
  );
}

export default App;
