import React from "react";
import CardInfo from "./CardInfo";
import Exchange from "./Exchange";
import Home from "./Home";
import MainHome from "./MainHome";
import { ContextProvider } from "../Store/Context/AuthContext";

function App2() {
  return (
    <ContextProvider>
      <CardInfo/>
    </ContextProvider>
  );
}

export default App2;
