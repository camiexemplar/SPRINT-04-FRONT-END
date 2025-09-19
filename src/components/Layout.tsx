import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logoextendida.png";

// Componente auxiliar para os itens de navegação, agora com emoji
const NavItem = ({ to, icon, label, onClick, isActive }: {
  to: string;
  icon: string;
  label: string;
  onClick: () => void;
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={`
      flex items-center gap-4 p-3 rounded-xl transition-all duration-200
      ${isActive
        ? "font-bold text-white bg-blue-600 shadow-md"
        : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
    onClick={onClick}
  >
    <div className="w-6 h-6 flex items-center justify-center text-xl">{icon}</div>
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export default function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: "🖥️", path: "/" },
    { name: "Histórico de usuários", icon: "🩺", path: "/historico" },
    { name: "Importar Dados", icon: "🧩", path: "/importar" },
    { name: "Vídeos para usuários", icon: "▶️", path: "/videos" },
    { name: "Enviar alertas", icon: "🚨", path: "/alertas" },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 shadow-lg
        transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <img src={logo} alt="CGL Healthtech Logo" className="h-10 w-auto" />
          <button className="lg:hidden text-gray-300" onClick={() => setSidebarOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              to={item.path}
              icon={item.icon}
              label={item.name}
              isActive={location.pathname === item.path}
              onClick={() => setSidebarOpen(false)}
            />
          ))}
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-x-hidden">
        <header className="bg-white flex items-center p-4 shadow-sm sticky top-0 z-40 lg:h-15 "> 
          {/* bolinha usuario*/}
          <div className="bg-gray-300 w-10 h-10 rounded-full fixed right-5"></div>
          <button className="text-2xl font-bold lg:hidden" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
        </header>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}