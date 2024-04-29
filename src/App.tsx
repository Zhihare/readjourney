import { useEffect, startTransition } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from './redax/Auth/authThanks';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegistrationPage';

import Loader from './Components/Loader/Loader';
import { PrivateRoute } from './PrivatRouter';

function App() {
  const { isLoggedIn, isRefreshing } = useAuth();

  useEffect(() => {
    startTransition(() => {
      refreshUser(); 
    });
  }, []);

  if (isRefreshing) {
    return <Loader />; 
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={isLoggedIn ? <PrivateRoute component={HomePage} /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default App;
