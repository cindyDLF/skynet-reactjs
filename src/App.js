import React, { useState } from "react";
import logo from "./assets/img/walle.jpg";
import "./App.css";
import Form from "./components/Form";
import Talk from "./components/Talk";
/// -> hooks
import useComponent from "./hooks/renderComponent";
import { UserProvider } from "./hooks/UserContext";

function App() {
  const isUser = useComponent();
  const mode = useComponent();
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("female");

  //const userData = { username, gender, isUser };
  const darkMode = "Dark";
  const lightMode = "Light";

  return (
    <div className={!mode.value ? "App dark-mode" : `App light-mode`}>
      <header
        className={!mode.value ? "App-header" : "App-header light-header"}
      >
        <button onClick={mode.onClick}>
          {mode.value ? `Dark Mode` : `Light Mode`}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserProvider
        value={{ username, setUsername, gender, setGender, isUser, mode }}
      >
        {isUser.value ? <Talk /> : <Form />}
      </UserProvider>
    </div>
  );
}

export default App;
