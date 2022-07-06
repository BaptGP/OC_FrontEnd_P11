import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import SlugArticle from "./components/slug/SlugArticle";
import Error from "./components/error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<SlugArticle />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
