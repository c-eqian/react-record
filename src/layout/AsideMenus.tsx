import { Menu, type MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { menuList } from '@/router/configList.ts';
type MenuItem = Required<MenuProps>['items'][number];
const createMenu = (menus: typeof menuList): MenuItem[] => {
  return menus.map(item => {
    const _item = {
      icon: item.icon ? <item.icon /> : null,
      key: item.key,
      label: item.label,
      children: [] as any
    };
    if (item.children?.length) {
      _item.children = createMenu(item.children ?? []);
    } else {
      delete _item.children;
    }
    return _item;
  });
};
// 侧边栏菜单
export default function AsideMenus() {
  const navigate = useNavigate();
  const handleClick: MenuProps['onClick'] = e => {
    navigate(`${e.key}`);
  };
  return (
    <>
      <Menu onClick={handleClick} mode="inline" items={createMenu(menuList)}></Menu>
    </>
  );
}
