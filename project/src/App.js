import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter, Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
            <Route path="/profile/:userId?" component={ProfileContainer} />
            <Route path="/dialogs" component={DialogsContainer } />
            <Route path="/users" component={UsersContainer } />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
