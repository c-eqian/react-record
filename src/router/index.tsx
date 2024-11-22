import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App.tsx';
import Login from '../login/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    /** 重定向 */
    element: <Navigate replace to="/login" />
  },
  {
    path: '/login',
    /** 重定向 */
    element: <Login></Login>
  },
  {
    path: '/home',
    element: <App></App>,
    children: []
  }
]);
