import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './component/firstpage';
import SignUp from './component/signup';
import Login from './component/login';
import FileUpload from './component/filesandfolders';
import Navbar from './component/Navbar';
import Aboutus from './component/Aboutus';
import Services from './component/Services';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/files" element={<FileUpload />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
