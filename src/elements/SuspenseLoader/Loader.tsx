import { Spin, Layout } from 'antd';

const { Content } = Layout;

export const Loader = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spin size="large" />
      </Content>
    </Layout>
  );
};
