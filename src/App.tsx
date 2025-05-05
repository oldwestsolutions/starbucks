import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Journey from './pages/Journey';
import LearnMore from './pages/LearnMore';
import News from './pages/News';
import Mission from './pages/Mission';

// Create a wrapper component to handle conditional footer rendering
const AppContent = () => {
  const location = useLocation();
  const hideNavbarFooter = ['/login', '/wallet', '/journey', '/news'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbarFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/news" element={<News />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
      </main>
      {!hideNavbarFooter && <Footer />}
      <Analytics />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
