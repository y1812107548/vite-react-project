import { useReducer } from "react";
interface State {
  count: number;
}

const initialState: State = {
  count: 0
}

type CounterAction = { type: "reset" } | { type: "setCount"; value: State["count"] };

const stateReducer = (state: State, action: CounterAction): State => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

export default function Count() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });
  return (
    <div>
        <div className="card">
          <div>计数：{state.count}</div>
          <button onClick={addFive}>Add 5</button>
          <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}
