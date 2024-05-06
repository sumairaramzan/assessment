import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarData from "./Components/Redux/Components/NavbarData";
import Create from "./Components/Redux/Components/Create";
import Read from "./Components/Redux/Components/Read";
import Update from "./Components/Redux/Components/Update";
import MultiStepForm from "./Components/Redux/Components/MultiStepForm";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarData />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/multiple-form" element={<MultiStepForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
