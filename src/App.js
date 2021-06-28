import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
