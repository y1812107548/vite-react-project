import React from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/index.tsx";
import zhCN from "antd/es/locale/zh_CN";
import { StyleProvider, px2remTransformer } from '@ant-design/cssinjs';
import "./index.css";

// type Theme = "light" | "dark" | "system";

// const ThemeContext = createContext<Theme>("system");

// const useGetTheme = () => useContext(ThemeContext);

// const [theme,setTheme] = useState<Theme>("light");

const px2rem = px2remTransformer({
  rootValue: 32, // 32px = 1rem; @default 16
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN} theme={{ token: { colorPrimary: "#1890ff" } }}>
      <StyleProvider transformers={[px2rem]}>
        <RouterProvider router={router} />
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>
);
