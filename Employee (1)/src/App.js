import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarData from "./Components/Redux/Components/NavbarData";
import Create from "./Components/Redux/Components/Create";
import Read from "./Components/Redux/Components/Read";
import Update from "./Components/Redux/Components/Update";
import MultiStepForm from "./Components/Redux/Components/MultiStepForm";
import slider1 from "../src/Components/Images/slider1.png";
import slider2 from "../src/Components/Images/slider2.png";
import slider3 from "../src/Components/Images/slider3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from "./Components/ImageSlider";

const App = () => {
  const slides = [
    {
      url: slider1,
      title: "beach",
    },
    {
      url: slider2,
      title: "boat",
    },
    {
      url: slider3,
      title: "forest",
    },
    {
      url: slider1,
      title: "city",
    },
  ];
  const containerStyles = {
    height: "480px",
  };
  return (
    <div>
      {/* <BrowserRouter>
        <NavbarData />
        <Routes>
          <Route path="/" element={<Carousel/>} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/multiple-form" element={<MultiStepForm />} />
        </Routes>
      </BrowserRouter> */}
      <div>
        <div style={containerStyles}>
          <ImageSlider slides={slides} parentWidth={500} />
        </div>
      </div>
    </div>
  );
};
export default App;
