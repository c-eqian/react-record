import { Menu, type MenuProps } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuList } from '@/router/configList.ts';
type MenuItem = Required<MenuProps>['items'][number];
const createMenu = (menus: typeof menuList, key: string = ''): MenuItem[] => {
  return menus.map(item => {
    const prefixKey = key + item.key;
    const _item = {
      icon: item.icon ? <item.icon /> : null,
      key: prefixKey,
      label: item.label,
      children: [] as any
    };
    if (item.children?.length) {
      _item.children = createMenu(item.children ?? [], prefixKey);
    } else {
      delete _item.children;
    }
    return _item;
  });
};
// 侧边栏菜单
export default function AsideMenus() {
  const navigate = useNavigate();
  const currentRouter = useLocation();
  // 获取初始值的路由，如刷新页面时
  const preKey = currentRouter.pathname.split('/').filter(item => item !== '');
  const initKey = preKey.length > 1 ? [`/${preKey[0]}`, currentRouter.pathname] : preKey;
  const [openKeys, setOpenKeys] = useState(initKey);
  const handleClick: MenuProps['onClick'] = e => {
    navigate(`${e.key}`);
  };

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]]); // 获取最后一项，因为只需要展开一项即可
  };
  return (
    <>
      <Menu
        defaultSelectedKeys={[currentRouter.pathname]}
        onClick={handleClick}
        mode="inline"
        openKeys={openKeys}
        items={createMenu(menuList)}
        onOpenChange={handleOpenChange}
      ></Menu>
    </>
  );
}
