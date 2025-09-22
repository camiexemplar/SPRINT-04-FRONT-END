// src/contexts/AuthContext.tsx

import React, { createContext, useState, useContext } from 'react'; // 1. REMOVI ReactNode DAQUI

// Tipagem para o que nosso contexto vai fornecer
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Criamos o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 2. CRIAMOS UMA TIPAGEM ESPECÍFICA PARA AS PROPS DO PROVIDER
type AuthProviderProps = {
  children: React.ReactNode; // Usamos React.ReactNode diretamente aqui
};

// Este é o componente que vai "prover" o estado de autenticação para toda a aplicação
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // O estado que diz se o usuário está logado ou não
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função para fazer o login (por enquanto, apenas muda o estado)
  const login = () => {
    setIsAuthenticated(true);
  };

  // Função para fazer o logout
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para facilitar o uso do nosso contexto em outros componentes
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};