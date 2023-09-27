import {
  useState,
  // useReducer,
  createContext,
  useContext
} from "react";
import "./App.css";
import ButtonTooltip from "./button-tooltip/ButtonTooltip";
// import ModalDialog from "./dialog/ModalDialog";
// import Observer from "./observer/Observer";
// import About from "./About";
// import Input from "./Input";
// import Product from "./product/Product";
// import Cart from "./Cart";
// import Timer from "./timer/Timer";
// import Queue from "./Queue";
// import TaskApp from "./task/TaskApp";
// import RestForm from "./rest-form/RestForm";
// import ToDo from "./todo/ToDo";

interface State {
  count: number;
}

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] };

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<Theme>("system");

const useGetTheme = () => useContext(ThemeContext);

const initialState: State = { count: 1 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

// function Toolbar({
//   onPlayMovie,
//   onUploadImage,
// }: {
//   onPlayMovie: () => void;
//   onUploadImage: () => void;
// }): JSX.Element {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>播放视频</Button>
//       <Button onClick={onUploadImage}>上传图片</Button>
//     </div>
//   );
// }

// function Button({
//   onClick,
//   children,
// }: {
//   onClick: () => void;
//   children: React.ReactElement | string;
// }): JSX.Element {
//   return <button onClick={onClick}>{children}</button>;
// }

function App(): JSX.Element {
  // const [state, dispatch] = useReducer(stateReducer, initialState);
  const [theme] = useState<Theme>("light");
  // const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  // const reset = () => dispatch({ type: "reset" });

  return (
    <>
      <ThemeContext.Provider value={theme}>
        {/* <h1>Vite + React</h1>
        <div className="card">
          <div>计数：{state.count}</div>
          <button onClick={addFive}>Add 5</button>
          <button onClick={reset}>Reset</button>
        </div> */}
        {/* <About useGetTheme={useGetTheme}></About> */}
        {/* <Input></Input> */}
        {/* <Toolbar
          onPlayMovie={() => alert("播放视频")}
          onUploadImage={() => alert("上传图片")}
        ></Toolbar> */}
        {/* <Cart></Cart> */}
        {/* <Queue></Queue> */}
        {/* <TaskApp></TaskApp> */}
        {/* <RestForm></RestForm> */}
        {/* <ToDo></ToDo> */}
        {/* <Timer></Timer> */}
        {/* <Product></Product> */}
        {/* <ModalDialog></ModalDialog> */}
        {/* <Observer></Observer> */}
        <ButtonTooltip></ButtonTooltip>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
