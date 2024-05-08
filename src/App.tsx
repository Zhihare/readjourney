import { useEffect, startTransition } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegistrationPage';
import MyLibraryPage from './Pages/MyLibraryPage';
import MyTrainingPage from './Pages/MyTrainingPage';

import Loader from './Components/Loader/Loader';

import { refreshUser } from './redax/Auth/authThanks';
import { AppDispatch } from './redax/store';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivatRouter';

// const HomePage = lazy(() => import('./Pages/HomePage'));
// const LoginPage = lazy(() => import('./Pages/LoginPage'));
// const RegisterPage = lazy(() => import('./Pages/RegistrationPage'));
// const MyLibraryPage = lazy(() => import('./Pages/MyLibraryPage'));
// const MyTrainingPage = lazy(() => import('./Pages/MyTrainingPage'));

function App() {
  const { isLoggedIn, isRefreshing } = useAuth();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    startTransition(() => {
      dispatch(refreshUser())
    });
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />; 
  }

  return (
    <Routes>
       <Route path="/" element={<Navigate to="/recommended" replace />} />
      <Route path="/login" element={isLoggedIn ? <Navigate to="/recommended" replace /> : <LoginPage />} />
      <Route path="/register" element={isLoggedIn? <Navigate to="/recommended" replace/>: <RegisterPage />} />
      <Route path="/recommended" element={<PrivateRoute component={HomePage} />} />
      <Route path="/library" element={<PrivateRoute component={MyLibraryPage} />} />
      <Route path="/reading" element={<PrivateRoute component={MyTrainingPage} />} />
    </Routes>
  );
}


export default App;
