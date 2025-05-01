import { createBrowserRouter, Navigate } from 'react-router';
import { NotFound } from '@/components/404/NotFound.tsx';
import BasicLayout from '@/layout/BasicLayout'; // 少量公共样式
import Login from '@/login/Login';
import { menuList } from '@/router/configList';
const createRouter = (menus: typeof menuList, list: any[] = []) => {
  menus.forEach(item => {
    if (item.children?.length) {
      createRouter(item.children, list);
    } else {
      list.push({
        path: item.key,
        Component: item.component
      });
    }
  });
  return list;
};
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
    path: '*',
    element: <NotFound></NotFound>
  },
  {
    element: <BasicLayout></BasicLayout>,
    children: createRouter(menuList)
  }
]);
