import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import movieIcon from "../assets/movieIcon.png"; 

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${search}`);
      setSearch("");
      setMenuOpen(false); 
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 text-2xl font-bold text-white">
          <img
            src={movieIcon} 
            alt="MovieApp"
            className="w-8 h-8"
          />
          <Link to="/">MovieApp</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-400 transition-colors duration-200">
            Home
          </Link>
          <Link to="/top-rated" className="text-white hover:text-gray-400 transition-colors duration-200">
            Top Rated
          </Link>
          <Link to="/upcoming" className="text-white hover:text-gray-400 transition-colors duration-200">
            Upcoming
          </Link>
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for movies..."
              className="px-4 py-2 text-white bg-gray-700 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors duration-200"
            >
              Search
            </button>
          </form>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col p-4 space-y-4 bg-gray-800">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/top-rated"
                className="text-white hover:text-gray-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Top Rated
              </Link>
            </li>
            <li>
              <Link
                to="/upcoming"
                className="text-white hover:text-gray-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Upcoming
              </Link>
            </li>
            <li>
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for movies..."
                  className="px-4 py-2 text-white bg-gray-700 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors duration-200"
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
