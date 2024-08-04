import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBook from "./Pages/CreateBook";
import ManageBooks from "./Pages/ManageBooks";
import EditBook from "./Pages/EditBook";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
       
          <div className="appdiv">
            <Sidebar/>
       
          <Routes>
            <Route path='/' element={<Home/>}/>
        <Route path='/createbooks' element={<CreateBook/>}/>
        <Route path="/editbooks/:id" element={<EditBook/>}/>
        <Route path='/managebooks' element={<ManageBooks/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
