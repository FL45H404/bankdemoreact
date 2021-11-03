import { StrictMode } from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducer/index";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
