import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import VideoCourses from "./components/Video Courses/VideoCourses";
import PrivateSessions from "./components/Private Sessions/PrivateSessions";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Logo from "./components/Home/components/Logo";

function App() {
  return (
    <Router>
      <NavBar />
      <Logo />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/video-courses" component={VideoCourses}/>
        <Route exact path="/private-sessions" component={PrivateSessions}/>
        <Route exact path="/faq" component={FAQ}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;