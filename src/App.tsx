import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import Sidebar from "./component/Sidebar/Sidebar";
import { Content, Header } from "antd/es/layout/layout";
import ChartHeader from "../src/component/Header/Header";
import ChartContent from "../src/component/Content/Content";
import "./App.css";
import React, { useMemo } from "react";

const Context = React.createContext({ name: "Default" });

const App = () => {
  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);
  return (
    <Context value={contextValue}>
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
    </Context>
  );
};

export default App;
