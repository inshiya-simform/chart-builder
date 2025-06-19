import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { chartStore } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorText: "white",
          colorTextHeading: "white",
        },
        components: {
          Select: {
            colorText: "black",
            colorTextHeading: "black",
          },
          Input: {
            colorText: "black",
            colorTextHeading: "black",
          },
        },
      }}
    >
      <Provider store={chartStore}>
        <App />
      </Provider>
    </ConfigProvider>
  </StrictMode>,
);
