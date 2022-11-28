
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { LogIn } from 'pages/LogIn/LogIn';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hooks';
import { Layout } from "./Layout";
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export default function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    'Refreshing user'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  )
};
