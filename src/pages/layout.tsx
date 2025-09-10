import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
    <div className="flex bg-gray-100 h-screen">
      {/* Sidebar */}
      <div
        className={`fixed bg-blue-200 w-64 h-screen shadow transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static`}
      >
        <div className="p-4 flex justify-between">
          <div className="text-2xl font-bold">Logo</div>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            X
          </button>
        </div>

        {/* Nav bar */}
        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex p-2 m-3 bg-blue-300 rounded-xl hover:bg-blue-400 transition"
            >
              <div className="p-2">{item.icon}</div>
              <div className="p-2">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="flex-1 lg:ml-64">
        <header className="bg-white flex justify-between p-4">
          <button
            className="p-2 text-xl font-bold lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-2xl font-bold">CGL HealthTech</h1>
          <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
        </header>

        <div className="p-4">
          <Outlet /> {/* Aqui as páginas mudam */}
        </div>
      </main>
    </div>
  );
}
