import React from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Homepage from "./components/pages/HomePage/HomePage";
import UploadPage from "./components/pages/VideoUpload/VideoUpload";

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Redirect from="/HomePage" to="/" />
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/upload-page" component={UploadPage} />
        <Route
          path="/videos/:id"
          render={(routerProps) => <Homepage {...routerProps} />}
        />
      </Switch>
    </div>
  );
}
