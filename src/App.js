import React from "react";
import Navbar from "./components/Navbar";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News/News";
function app() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default app;
