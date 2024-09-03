import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Issues from './pages/issues/Issues';
import IssueDetail from './pages/issues/IssueDetail';
import Header from './components/header/Header';
import './App.css';

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/issues" element={<Issues/>}/>
        <Route path="/issues/:issueNumber" element={<IssueDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App