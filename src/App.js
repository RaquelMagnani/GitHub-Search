import React from "react";
import  Home from "./Pages/Home/Home";
//import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>GitHub Search</h1>
      {/* <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        {/* <Route path="/result" render={props => <Result {...props} />} /> 
      </Switch>
      */}
      <Home/>
    </div>
  );
}

export default App;