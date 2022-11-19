import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
