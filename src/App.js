import "./App.css";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
import Layout from "./component/layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./component/routings/Routes";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Layout}></Route>
          <Route component={Routes}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
