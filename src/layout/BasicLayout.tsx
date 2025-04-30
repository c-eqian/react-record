import { Layout, theme } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import AsideMenus from './AsideMenus';
import HeaderTop from './HeaderTop';
const { Header, Content, Footer, Sider } = Layout;
export default function BasicLayout() {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <>
      <Layout className={'cz-size-full'}>
        <Header style={{ background: colorBgContainer }}>
          <HeaderTop></HeaderTop>
        </Header>
        <Layout>
          <Sider theme={'light'}>
            <AsideMenus></AsideMenus>
          </Sider>
          <Layout>
            <Content>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet></Outlet>
              </Suspense>
            </Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
