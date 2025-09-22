// src/pages/LoginPage.tsx

import React from 'react';
import logo from '../assets/logo.png'; 

export const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      
      {/* Header (mantido como está) */}
      <header className="w-full bg-white shadow-md py-2 px-8">
        <img src={logo} alt="CGL HealthTech Logo" className="w-25" />
      </header>

      {/* Área de conteúdo principal */}
      <main className="flex flex-grow items-center justify-center p-8">
        
        {/* Card de login */}
        <div className="flex w-full max-w-7xl bg-white rounded-xl shadow-2xl overflow-hidden">
          
          {/* 1. Painel Esquerdo: Ajustes para ficar como o exemplo */}
          <div className="flex-1 p-24 flex flex-col items-center justify-center"> {/* ALTERADO: adicionei items-center */}
            
            {/* Texto "Conectando Saúde e Tecnologia" - Cor azul, maior, mais espaçamento */}
            <h1 className="text-4xl font-semibold text-blue-500 text-center mb-4 leading-tight"> {/* ALTERADO: cor, tamanho, centralizado, font-semibold, leading-tight */}
              Conectando Saúde e Tecnologia
            </h1>
            
            {/* Texto "Login" - Cor escura, tamanho um pouco menor */}
            <h2 className="text-3xl font-medium text-gray-800 text-center mb-12"> {/* ALTERADO: cor, tamanho, centralizado, font-medium */}
              Login
            </h2>
          
            <form className="flex flex-col space-y-6 w-full max-w-sm"> {/* ALTERADO: space-y-6 e adicionei w-full max-w-sm para limitar a largura do formulário */}
              <input
                type="email"
                placeholder="E-mail institucional"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <input
                type="password"
                placeholder="Senha"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              {/* Botão "Entrar" - Cor azul mais clara (como no exemplo) */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-400 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors text-xl"
              >
                Entrar
              </button>
            </form>
            
            <a href="#" className="mt-8 text-center text-base text-gray-600 hover:underline"> {/* ALTERADO: mt-10 para mt-8 e text-sm para text-base */}
              Esqueceu a senha?
            </a>
          </div>

          {/* Painel Direito: Informações (mantido como está) */}
          <div className="flex-1 p-24 bg-blue-500 text-white flex items-center justify-center">
            <p className="text-2xl leading-relaxed text-center">
              Plataforma digital do Hospital das Clínicas, desenvolvida para facilitar o acesso seguro e eficiente às informações de pacientes e dashboards de gestão.
            </p>
          </div>
          
        </div>
      </main>
    </div>
  );
};