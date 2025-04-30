import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import BasicLayout from '../layout/BasicLayout.tsx'; // 少量公共样式
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
    element: <BasicLayout></BasicLayout>,
    children: [
      {
        path: '/dashboard',
        Component: lazy(() => import('../views/home/Dashboard.tsx'))
      },
      {
        path: '/article/list',
        Component: lazy(() => import('../views/article/List.tsx'))
      }
    ]
  }
]);
