import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import WelcomeContent from "./components/Welcome";
import BottomSection from "./components/BottomSection";
import TicketSection from "./components/TickectSection";
import ComingSoon  from "./components/ComingSoon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mobileNav, setMobileNav] = useState("hide-nav");
  const hideNav = (val)=>{
    console.log(val)
    setMobileNav(val)
  }

  return (
    <Router>
      <div className="App">
        <Header hide_={hideNav}/>
        <MobileNav hide={mobileNav} />
        <Switch>
          <Route exact path = "/">
            <WelcomeContent />
            <BottomSection />
          </Route>

          <Route path="/basic">
            <TicketSection title="Basic" amount = {1}/>
          </Route>

          <Route path="/investor">
            <TicketSection title="Investor" amount = {10}/>
          </Route>

          <Route path="/whale">
            <TicketSection title="Whale" amount = {100}/>
          </Route>

          <Route path="/coming">
            <ComingSoon />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
