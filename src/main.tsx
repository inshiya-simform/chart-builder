import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

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
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
