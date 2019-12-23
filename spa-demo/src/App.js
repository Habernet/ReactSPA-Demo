import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/NavBar/navbar";
import PageOne from "./pages/PageOne/pageone";
import PageTwo from "./pages/PageTwo/pagetwo";
import PageThree from "./pages/PageThree/pagethree";


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
      <Route path="/PageOne">
        <PageOne />
      </Route>
      <Route path="/PageTwo">
        <PageTwo />
      </Route>
      <Route path="/PageThree">
        <PageThree />       
      </Route>
      <Route path="/">
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
