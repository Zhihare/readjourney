import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

interface RestrictedRouteProps {
  component: React.ComponentType<any>; 
  redirectTo?: string;
}

export const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn} = useAuth();
  
  return isLoggedIn ? <Navigate to={redirectTo}/> : <Component />;
};