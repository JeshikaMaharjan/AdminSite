import { useState } from "react";
import "./App.css";

import GlobalContextProvider from "./context/GlobalStates";
import NavigationStack from "./navigation/navigationStack";

function App() {
  return (
    <div className="appContainer">
      <GlobalContextProvider>
        <NavigationStack />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
