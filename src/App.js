import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import WelcomeContent from "./components/Welcome";
import BottomSection from "./components/BottomSection";
import TicketSection from "./components/TickectSection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MobileNav />
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
        </Switch>
    </div>
    </Router>
  );
}

export default App;
