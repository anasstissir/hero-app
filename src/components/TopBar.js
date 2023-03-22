import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiSearch } from 'react-icons/fi';
import SearchContext from '../utils/SearchContext';

const TopBar = () => {
  const [show, setShow] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const searchBarRef = useRef();
  const location = useLocation();

  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleClickOutside = event => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full p-4 bg-black/60 z-10 transition-all duration-300 ${show ? 'bg-opacity-100' : 'bg-opacity-0'}`}
    >
      <div className="container mx-auto flex items-center">
        <Link to="/">
          <img src={logo} alt="Your Logo" className="h-10 w-auto" />
        </Link>
        {location.pathname === '/' && (
          <nav className="flex items-center">
            <div className="relative ml-4 flex items-center" ref={searchBarRef}>
              <button className="text-white text-2xl" onClick={() => setSearchVisible(!searchVisible)}>
                <FiSearch />
              </button>
              {searchVisible && (
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className={`${
                    searchVisible ? 'w-64 pl-10' : 'w-0 pl-0'
                  } absolute top-0 left-0 bg-black border-b-2 border-white text-white transition-all duration-300`}
                  placeholder="Search Hero..."
                  onFocus={() => setSearchVisible(true)}
                />
              )}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default TopBar;
