import React from "react";
import  Home from "./Pages/Home/Home";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        {/* <Route path="/result" render={props => <Result {...props} />} />  */}
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;