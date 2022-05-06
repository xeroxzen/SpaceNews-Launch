import React from "react";
import Header from "./components/Header";
// import { Routes, Route } from "react-router-dom";
// import Reports from "./components/Reports";
import Articles from "./components/Articles";
// import Blog from "./components/Blog";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Articles />
      </main>
    </React.Fragment>
  );
}

export default App;
