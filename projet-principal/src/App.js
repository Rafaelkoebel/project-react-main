import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import React from './pages/React';
import Conclusion from './pages/Conclusion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/React" element={<React/>} />
        <Route path="/Conclusion" element={<Conclusion/>} />
      </Routes>
    </Router>
  );
}


export default App;
