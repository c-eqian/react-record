import { Layout } from 'tdesign-react';
const { Header, Content, Footer, Aside } = Layout;
export default function BasicLayout() {
  return (
    <>
      <Layout className={'cz-h-full'}>
        <Header>Header</Header>
        <Layout>
          <Aside width={'80px'}>Aside</Aside>
          <Layout>
            <Content className={'cz-h-full'}>Content</Content>
            <Footer>Copyright @ 2019-2021 Tencent. All Rights Reserved</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
