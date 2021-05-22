import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CandidateList from './components/CandidateList';
import Description from './components/Description';
import Footer from './components/Footer';

function App() {
  return ( 
  <>
    <Header />
    <CandidateList />
    <Description />
    <Features />
    <Pricing />
    <Footer />
  </>
  )
}

export default App;
