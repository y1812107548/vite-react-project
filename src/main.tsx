import React from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { Loader as RootLoader, Action as RootAction } from "./routes/root";
import ErrorPage from "./error-page.tsx";

import App from "./App.tsx";
import zhCN from "antd/es/locale/zh_CN";
import "./index.css";
import Contact, { Loader as ContactLoader, Action as ContactAction } from "./routes/contact.tsx";
import EditContact,{ Action as EditAction } from "./routes/edit.tsx";
import { DeleteAction as DestroyAction } from "./routes/destroy";
import Index from "./routes/index.tsx";

// type Theme = "light" | "dark" | "system";

// const ThemeContext = createContext<Theme>("system");

// const useGetTheme = () => useContext(ThemeContext);

// const [theme,setTheme] = useState<Theme>("light");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: RootLoader,
    action: RootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement:<ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: ContactLoader,
            action: ContactAction
          },
          {
            path:"contacts/:contactId/edit",
            element:<EditContact />,
            loader: ContactLoader,
            action: EditAction
          },
          {
            path:"contacts/:contactId/destroy",
            action: DestroyAction,
            errorElement: <div>Oops! Something went wrong</div>
          }
        ]
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN} theme={{ token: { colorPrimary: "#1890ff" } }}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
