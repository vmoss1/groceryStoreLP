import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react";
import configureStore from "./store/store";
import { populateProduce } from "./store/produce";
import App from "./App";
import "./index.css";

// import { populateProduce } from "./store/produce";
// ...

const store = configureStore();

// if (import.meta.env.MODE !== "production") {
//   window.store = store;
//   window.populateProduce = populateProduce;
// }

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
