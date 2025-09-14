import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Layout() {
  const navItems = [
    { name: "Dashboard", icon: "🖥️", path: "/" },
    { name: "Histórico de usuários", icon: "🩺", path: "/historico" },
    { name: "Importar Dados", icon: "🧩", path: "/importar" },
    { name: "Vídeos para usuários", icon: "▶", path: "/videos" },
    { name: "Enviar alertas", icon: "🚨", path: "/alertas" },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-100 h-screen overflow-hidden">

      <div
        className={`fixed bg-blue-200 w-64 h-screen shadow transform transition-transform duration-300 pt-5 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static`}
      >
        <div className="p-4 flex justify-between">
          <div className="text-2xl font-bold"></div>
          <button className="lg:hidden font-bold pt-15" onClick={() => setSidebarOpen(false)}>
            X
          </button>
        </div>


        <div className="p-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex p-2 m-2 bg-blue-300 rounded-xl hover:bg-blue-400 transition"
              onClick={() => setSidebarOpen(false)}
            >
              <div className="p-2">{item.icon}</div>
              <div className="p-2">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>


      <div className="flex-1 flex flex-col overflow-x-hidden">

        <header className="bg-white flex justify-between items-center p-5 shadow z-10 h-20">
          <button
            className="p-2 text-xl font-bold lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <div className=""><img className="w-25 h-25" src={logo} alt="Logo CGL HEALTHTECH" /></div>
          <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
        </header>


        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}