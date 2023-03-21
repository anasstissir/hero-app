import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroDetails from './features/HeroDetails';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import { SearchProvider } from './utils/SearchContext';
import { HeroProvider } from './utils/HeroContext';

function App() {
  return (
    <Router>
      <SearchProvider>
        <HeroProvider>
          <div className="App bg-gray-900 min-h-screen">
            <TopBar />
            <div className="p-6 pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hero/:id" element={<HeroDetails />} />
              </Routes>
            </div>
          </div>
        </HeroProvider>
      </SearchProvider>
    </Router>
  );
}

export default App;
