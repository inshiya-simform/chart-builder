import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import Sidebar from "./component/Sidebar/Sidebar";
import { Content, Header } from "antd/es/layout/layout";
import ChartHeader from "../src/component/Header/Header";
import ChartContent from "../src/component/Content/Content";
import "./App.css";
const App = () => {
  return (
    <Layout className="main-container">
      <Sider width={300}>
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <ChartHeader />
        </Header>
        <Content className="chart">
          <ChartContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
