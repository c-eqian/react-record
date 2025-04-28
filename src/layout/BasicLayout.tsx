import { Layout, theme } from 'antd';
import AsideMenus from './AsideMenus';
const { Header, Content, Footer, Sider } = Layout;
export default function BasicLayout() {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <>
      <Layout className={'cz-size-full'}>
        <Header style={{ background: colorBgContainer }}>header</Header>
        <Layout>
          <Sider theme={'light'}>
            <AsideMenus></AsideMenus>
          </Sider>
          <Layout>
            <Content>main content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
