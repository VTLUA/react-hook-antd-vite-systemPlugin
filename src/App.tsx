import React, { lazy, useEffect } from "react";
import { RootState } from "./store/store";
import Home from "@/page/Home";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "@/store/feature/userSlice";
import "./App.css"
import Login from "./page/Login";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getToken());
  }, [token])

  return (
    <div className="App">
      {
        token ? <Home></Home> : <Login></Login>
      }
    </div>
  )
}

export default App;