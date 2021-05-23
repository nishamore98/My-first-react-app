import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Blog from './components/Blog';
import CandidateList from './components/CandidateList';
import Description from './components/Description';
import Footer from './components/Footer';

function App() {
  return ( 
  <>
    <Header />
    <Description />
    <CandidateList />
    <Features />
    <Blog />
    <Footer />
  </>
  )
}

export default App;
