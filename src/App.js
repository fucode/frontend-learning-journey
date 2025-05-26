import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import HtmlPage from './HtmlPage';
import CssPage from './CssPage';
import JavascriptPage from './JavascriptPage';
import JSPlayground from './JSPlayground';
import ReactPage from './ReactPage';
import MaterialPage from './MaterialPage'; 



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/css" element={<CssPage />} />
        <Route path="/javascript" element={<JavascriptPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/material" element={<MaterialPage />} /> {/* ✅ Add this line */}
        <Route path="/js-playground" element={<JSPlayground />} />

      </Routes>
    </Router>
  );
}

export default App;
