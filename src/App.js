import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import "./App.css";

function App() {
  return (
    <div>
      {/* // Switch: the moment a route is found, it will only render that route */}
      <Switch>
        {/* // without exact, as long as the path matches then the component will
        render */}
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
