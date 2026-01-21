import { useReducer } from "react";
import "./App.css";

type State = {
  isDark: boolean;
  fSize: number;
};

type Action =
  | { type: "TOGGLE_DARK_MODE" }
  | { type: "INCREASE_FONT_SIZE" }
  | { type: "DECREASE_FONT_SIZE" };

const initialState: State = {
  isDark: false,
  fSize: 16,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, isDark: !state.isDark };
    case "INCREASE_FONT_SIZE":
      return { ...state, fSize: state.fSize + 1 };
    case "DECREASE_FONT_SIZE":
      return { ...state, fSize: state.fSize - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        backgroundColor: state.isDark ? "black" : "white",
        color: state.isDark ? "white" : "black",
        fontSize: `${state.fSize}px`,
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h1>useReducer Exercise</h1>
      <p>Hello 👋</p>
      <p>Current font size: {state.fSize}px</p>
      <p>Dark mode: {state.isDark ? "ON" : "OFF"}</p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>
          Toggle Dark Mode
        </button>
        <button onClick={() => dispatch({ type: "INCREASE_FONT_SIZE" })}>
          Increase Font Size
        </button>
        <button onClick={() => dispatch({ type: "DECREASE_FONT_SIZE" })}>
          Decrease Font Size
        </button>
      </div>
    </div>
  );
}

export default App;
