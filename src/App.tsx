import React from "react";
import logo from "./assets/img/logo.png";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import Form from "./components/Form/Form";
import { setPage } from "./state/appSlice";

function App() {
  const page = useSelector((state: RootState) => state.app.page);
  const dispatch = useDispatch();
  return (
    <div className="app">
      {page === "main" ? (
        <header className="header">
          <div>
            <img className="logo" src={logo} alt="logo" />
            <p>
              Find the <span>best place to rest</span> while traveling
            </p>
            <button
              className="reg_btn"
              onClick={() => dispatch(setPage("form"))}
            >
              Registration
            </button>
          </div>
        </header>
      ) : (
        <Form />
      )}
      <div className="background">
        <div className="blur"></div>
      </div>
    </div>
  );
}

export default App;
