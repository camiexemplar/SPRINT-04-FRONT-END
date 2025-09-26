import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/logo.png'; 

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    login(); 
    
    navigate('/dashboard'); 
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      
      <header className="w-full bg-white shadow-md py-2 px-8">
         <Link to="/" className="flex items-center gap-2 justify-between">
        <img src={logo} alt="CGL HealthTech Logo" className="w-25" />
        <span className="font-bold text-xl text-blue-600">Voltar a Home</span>
      </Link>
      </header>

      <main className="flex flex-grow items-center justify-center p-8">
        
        <div className="flex w-full max-w-7xl bg-white rounded-xl shadow-2xl overflow-hidden">
          
          <div className="flex-1 p-24 flex flex-col items-center justify-center">
            
            <h1 className="text-4xl font-semibold text-blue-500 text-center mb-4 leading-tight">
              Conectando Saúde e Tecnologia
            </h1>
            
            <h2 className="text-3xl font-medium text-gray-800 text-center mb-12">
              Login
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-full max-w-sm">
              <input
                type="email"
                placeholder="E-mail institucional"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-400 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors text-xl"
              >
                Entrar
              </button>
            </form>
            
            <a href="#" className="mt-8 text-center text-base text-gray-600 hover:underline">
              Esqueceu a senha?
            </a>
          </div>

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