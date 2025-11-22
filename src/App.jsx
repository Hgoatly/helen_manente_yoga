import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Book from './pages/Book';
import Classes from './pages/Classes';
import Contact from './components/ContactForm'; 
import Partners from './pages/Partners.jsx'; 

function App() {
  return (
    <Router basename="/helen_manente_yoga">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
