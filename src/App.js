import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Home, LoginPage } from "./routes";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
    </HashRouter>
  );
}

export default App;
