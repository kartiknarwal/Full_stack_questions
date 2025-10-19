import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryQuestions from "./pages/CategoryQuestions";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryQuestions />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
