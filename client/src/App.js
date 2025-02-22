import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Support from "./screens/Support";
import Employee from "./screens/Employee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./screens/Header";
import Cal from "./screens/Cal";
import Cal1 from "./screens/Cal1";

function App() {
  return (
    <React.Fragment>
      {/* <Home />
      <About />
      <Contact />
      <Support />
      <Employee /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="support" element={<Support />} />
          <Route path="employee" element={<Employee />} />
          <Route path="cal" element={<Cal />} />
          <Route path="cal1" element={<Cal1 />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
