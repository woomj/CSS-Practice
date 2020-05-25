import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Movie } from "./components";
import { Home, LoginPage } from "./routes";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/movie1" component={Movie} />
      <Route path="/login" component={LoginPage} />
    </HashRouter>
  );
}

export default App;
