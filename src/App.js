import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import { SearchProvider } from './utils/SearchContext';
import { HeroProvider } from './utils/HeroContext';
import Footer from './components/Footer';
import HeroPage from './pages/HeroPage';

function App() {
  return (
    <Router>
      <SearchProvider>
        <HeroProvider>
          <div className="App bg-gray-900 min-h-screen">
            <TopBar />
            <div className="p-6 pt-28">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hero/:id" element={<HeroPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </HeroProvider>
      </SearchProvider>
    </Router>
  );
}

export default App;
