import React from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/index.tsx";
import zhCN from "antd/es/locale/zh_CN";
import "./index.css";

// type Theme = "light" | "dark" | "system";

// const ThemeContext = createContext<Theme>("system");

// const useGetTheme = () => useContext(ThemeContext);

// const [theme,setTheme] = useState<Theme>("light");

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN} theme={{ token: { colorPrimary: "#1890ff" } }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
