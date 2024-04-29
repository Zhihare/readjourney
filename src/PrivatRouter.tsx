import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

interface PrivateRouteProps {
  component: React.ComponentType<any>; 
  redirectTo?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, redirectTo= '/login' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo}/> : <Component />;
};

