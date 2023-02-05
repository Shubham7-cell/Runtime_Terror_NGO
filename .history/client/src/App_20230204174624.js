// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/Login";
// import Upload from "./pages/institute/Upload";
import AdminDashboard from "./pages/admin/Dashboard";
import VolunteerRegistration from "./pages/admin/Register";
// import InstituteDashboard from "./pages/institute/Dashboard";
import VolunteerDashboard from "./pages/volunteer/Dashboard";
import InstituteLogin from "./pages/volunteer/Login";
import InstituteResiter from "./pages/volunteer/Register";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminauth" element={<AdminLogin />} />
        <Route path="/instituteauth" element={<InstituteLogin />} />
        {/* <Route path="/institute/upload" element={<Upload />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/institute/dashboard" element={<InstituteDashboard />} /> */}
        <Route path="volunteer/Dashboard" element={<VolunteerDashboard />} />
        <Route path="volunteer/Register" element={<VolunteerRegistration />} />
        <Route path="/instituteregister" element={<InstituteResiter />} />
      </Routes>
    </div>
  );
}

export default App;
