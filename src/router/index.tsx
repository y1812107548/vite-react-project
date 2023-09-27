import { createBrowserRouter } from "react-router-dom";
import Contact, { Loader as ContactLoader, Action as ContactAction } from "@/routes/contact-list/contact";
import EditContact,{ Action as EditAction } from "@/routes/contact-list/edit";
import { DeleteAction as DestroyAction } from "@/routes/contact-list/destroy";
import Root, { Loader as RootLoader, Action as RootAction } from "@/routes/root";
import ErrorPage from "@/error-page.tsx";
import ButtonTooltip from "@/routes/button-tooltip/ButtonTooltip";
import ModalDialog from "@/routes/dialog/ModalDialog";
import Observer from "@/routes/observer/Observer";
import ToDo from "@/routes/todo/ToDo";
import RestForm from "@/routes/rest-form/RestForm";
import Drag from "@/routes/drag/Drag";
import TaskApp from "@/routes/task/TaskApp";
import Chat from "@/routes/chat/Chat";
import Product from "@/routes/product/Product";
import Timer from "@/routes/timer/Timer";
import Count from "@/routes/count/Count";
import Cart from "@/routes/Cart";
import Queue from "@/routes/Queue";
export const router = createBrowserRouter([
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
            // element: <Index />,
            async lazy(){
              const App = await import("@/App");
              console.log(App);
              return { Component:App.default };
            }
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: ContactLoader,
            action: ContactAction,
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
          },
          {
            path:"button-tooltip",
            element: <ButtonTooltip />
          },
          {
            path:"modal-dialog",
            element: <ModalDialog />
          },
          {
            path:"observer",
            element: <Observer />
          },
          {
            path:"todo",
            element: <ToDo />
          },
          {
            path:"rest-form",
            element: <RestForm />
          },
          {
            path:"drag",
            element: <Drag />
          },
          {
            path:"task",
            element: <TaskApp />
          },
          {
            path:"chat",
            element: <Chat />
          },
          {
            path:"product",
            element: <Product />
          },
          {
            path:"timer",
            element: <Timer />
          },
          {
            path:"count",
            element: <Count />
          },
          {
            path:"cart",
            element: <Cart />
          },
          {
            path:"queue",
            element: <Queue />
          }
        ]
      },
    ],
  },
])
