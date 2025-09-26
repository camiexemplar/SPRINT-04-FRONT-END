import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useState } from 'react';

export function PublicNavbar() {
  const linkStyle = "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkStyle = "text-blue-600 font-bold px-5 py-2 rounded-md text-xl font-medium";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-5 flex justify-between items-center">
      {/* Hamburger Menu Button for Mobile */}
      <button 
        className="text-2xl font-bold lg:hidden" 
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>

      {/* Logo and Brand Name */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="HealthTech Logo" className="h-16" />
        <span className="font-bold text-xl text-gray-700">CareLink</span>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="items-center gap-6 hidden lg:flex">
        <li><NavLink to="/" className={({isActive}) => isActive ? activeLinkStyle : linkStyle}>Home</NavLink></li>
        <li><NavLink to="/contato" className={({isActive}) => isActive ? activeLinkStyle : linkStyle}>Contato</NavLink></li>
        <li><NavLink to="/faq" className={({isActive}) => isActive ? activeLinkStyle : linkStyle}>FAQ</NavLink></li>
        <li><NavLink to="/integrantes" className={({isActive}) => isActive ? activeLinkStyle : linkStyle}>Integrantes</NavLink></li>
      </ul>

      {/* Login Button for Desktop */}
      <Link to="/login" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all hidden lg:flex">
        Entrar no CareLink
      </Link>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setSidebarOpen(false)}></div>
          
          {/* Sidebar Content */}
          <div className="relative w-64 bg-white shadow-lg p-4">
            <button 
              className="absolute top-4 right-4 text-gray-600" 
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
            <ul className="flex flex-col gap-4 mt-8">
              <li><NavLink to="/" className={({isActive}) => isActive ? activeLinkStyle : linkStyle} onClick={() => setSidebarOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/contato" className={({isActive}) => isActive ? activeLinkStyle : linkStyle} onClick={() => setSidebarOpen(false)}>Contato</NavLink></li>
              <li><NavLink to="/faq" className={({isActive}) => isActive ? activeLinkStyle : linkStyle} onClick={() => setSidebarOpen(false)}>FAQ</NavLink></li>
              <li><NavLink to="/integrantes" className={({isActive}) => isActive ? activeLinkStyle : linkStyle} onClick={() => setSidebarOpen(false)}>Integrantes</NavLink></li>
              <li>
                <Link to="/login" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all" onClick={() => setSidebarOpen(false)}>
                  Entrar no CareLink
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}