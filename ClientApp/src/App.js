import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Layout from './components/hocs/Layout';
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Admin from "./components/pages/adminComponents/Admin";
import Profile from "./components/ProfileComponents/Profile";
import MyTable from "./components/userComponents/MyTable";
import AdminSelection from "./components/pages/adminComponents/AdminSelection";
import UserTable from "./components/pages/adminComponents/UserTable";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admin/selection" element={<AdminSelection />} />
          <Route path="/admin/userTable" element={<UserTable/>} /> 
          <Route path="/table/:date" element={<MyTable/>} />      
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;