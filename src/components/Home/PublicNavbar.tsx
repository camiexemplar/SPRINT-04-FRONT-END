import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export function PublicNavbar() {
  const linkStyle = "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkStyle = "text-blue-600 font-bold px-5 py-2 rounded-md text-xl font-medium";

  return (

    <nav className="bg-white shadow-md p-5 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
      <img src={ logo } alt="HealthTech Logo" className="h-15" />
      <span className="font-bold text-xl text-grey-700">CareLink</span>
      </Link>

      <ul className="flex items-center gap-6">
        <li><NavLink to="/" className={({isActive}) => isActive ? activeLinkStyle : linkStyle}>Home</NavLink></li>
        <li><NavLink to="/contato" className={({isActive}) => isActive ? activeLinkStyle : linkStyle}>Contato</NavLink></li>
        <li><NavLink to="/faq" className={({isActive}) => isActive ? activeLinkStyle : linkStyle}></NavLink>FAQ</li>
        <li><NavLink to="/integrantes" className={({isActive}) => isActive ? activeLinkStyle : linkStyle}></NavLink>Integrantes</li>
      </ul>
      <Link to="/login" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
      Entrar no CareLink
      </Link>
      </nav>      
      );
      }
      