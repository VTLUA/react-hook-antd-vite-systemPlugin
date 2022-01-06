import React from "react"
import ReactDOM from "react-dom"
// 跨组件状态共享
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"
import store from "@/store";
import "./index.css"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
