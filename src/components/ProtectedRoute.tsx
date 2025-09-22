// src/components/ProtectedRoute.tsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // Se o usuário estiver autenticado, renderiza a página que ele quer acessar (Dashboard, etc.)
  if (isAuthenticated) {
    return <Outlet />; // Outlet é um placeholder para a rota filha (ex: <Dashboard />)
  }

  // Se não estiver autenticado, redireciona para a página de login
  return <Navigate to="/login" />;
};