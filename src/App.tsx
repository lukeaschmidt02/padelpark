import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Scene3D } from './components/Scene3D';
import { RegisterInterest } from './components/RegisterInterest';
import { Gallery } from './components/Gallery';
import { Play } from './pages/Play';
import { Menu } from './pages/Menu';
import { About } from './pages/About';

function Home() {
  return (
    <>
      <Scene3D />
      <Hero />
      <Gallery />
      <RegisterInterest />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
