import { SettingOutlined } from '@ant-design/icons';
import { lazy } from 'react';

export const menuList = [
  {
    label: '首页',
    key: '/dashboard',
    icon: SettingOutlined,
    component: lazy(() => import('../views/home/Dashboard.tsx'))
  },
  {
    label: '文章管理',
    key: '/article',
    icon: SettingOutlined,
    children: [
      {
        label: '文章列表',
        icon: SettingOutlined,
        key: '/article/list',
        component: lazy(() => import('../views/article/List.tsx'))
      },
      {
        label: '发布文章',
        icon: SettingOutlined,
        key: '/article/post',
        component: lazy(() => import('../views/article/Post.tsx'))
      }
    ]
  },
  {
    label: '笔记管理',
    key: '/notes',
    icon: SettingOutlined,
    children: [
      {
        label: '笔记列表',
        icon: SettingOutlined,
        key: '/notes/list'
      },
      {
        label: '发布笔记',
        icon: SettingOutlined,
        key: '/notes/post'
      }
    ]
  },
  {
    label: '登录日记',
    icon: SettingOutlined,
    key: '/log'
  }
];
