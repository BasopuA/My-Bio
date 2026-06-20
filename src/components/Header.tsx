import { useState } from "react";
import { Link } from "react-router-dom";
import { resumeData } from "../Data/resumeData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { personal } = resumeData;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/experience", label: "Experience" },
    { to: "/education", label: "Education" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-green-800 hover:text-green-600 transition-colors">
            {personal.name.split(" ")[0]}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;