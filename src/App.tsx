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

function App() {
  const { isLoggedIn, isRefreshing } = useAuth();
  console.log(isLoggedIn, isRefreshing);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    startTransition(() => {
      dispatch(refreshUser())
    });
  }, []);

  if (isRefreshing) {
    return <Loader />; 
  }

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<PrivateRoute component={HomePage} />} />
      <Route path="/myLibrary" element={<PrivateRoute component={MyLibraryPage} />} />
      <Route path="/mytraining" element={<PrivateRoute component={MyTrainingPage} />} />
    </Routes>
  );
}


export default App;
