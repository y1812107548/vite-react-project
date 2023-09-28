import { createBrowserRouter } from "react-router-dom";
import Contact, { Loader as ContactLoader, Action as ContactAction } from "@/view/contact-list/contact";
import EditContact,{ Action as EditAction } from "@/view/contact-list/edit";
import { DeleteAction as DestroyAction } from "@/view/contact-list/destroy";
import Root, { Loader as RootLoader, Action as RootAction } from "@/view/root";
import ErrorPage from "@/error-page.tsx";
import ButtonTooltip from "@/view/button-tooltip/ButtonTooltip";
import ModalDialog from "@/view/dialog/ModalDialog";
import Observer from "@/view/observer/Observer";
import ToDo from "@/view/todo/ToDo";
import RestForm from "@/view/rest-form/RestForm";
import Drag from "@/view/drag/Drag";
import TaskApp from "@/view/task/TaskApp";
import Chat from "@/view/chat/Chat";
import Product from "@/view/product/Product";
import Timer from "@/view/timer/Timer";
import Count from "@/view/count/Count";
import Cart from "@/view/Cart";
import Queue from "@/view/Queue";
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
