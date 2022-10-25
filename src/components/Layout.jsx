import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Lists from "./Lists";

import Routes from "../routes/Routes";

function Layout() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="app">
            <Header />
            <div className="container grid">
              <div className="row">
                <div className="lists col l-2 m-0 c-0">
                  <Lists {...props} />
                </div>
                <div className="main col l-10 m-12 c-12">
                  <Routes />
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default Layout;
