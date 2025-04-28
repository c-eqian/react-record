import { SettingOutlined } from '@ant-design/icons';
import { Menu, type MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const menuList: MenuItem[] = [
  {
    label: '首页',
    key: '/home',
    icon: <SettingOutlined />
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <SettingOutlined />,
    children: [
      {
        label: '文章列表',
        icon: <SettingOutlined />,
        key: '/article/list'
      },
      {
        label: '发布文章',
        icon: <SettingOutlined />,
        key: '/article/post'
      }
    ]
  },
  {
    label: '笔记管理',
    key: '/notes',
    icon: <SettingOutlined />,
    children: [
      {
        label: '笔记列表',
        icon: <SettingOutlined />,
        key: '/notes/list'
      },
      {
        label: '发布笔记',
        icon: <SettingOutlined />,
        key: '/notes/post'
      }
    ]
  },
  {
    label: '登录日记',
    icon: <SettingOutlined />,
    key: '/log'
  }
];
// 侧边栏菜单
export default function AsideMenus() {
  return (
    <>
      <Menu mode="inline" items={menuList}></Menu>
    </>
  );
}
