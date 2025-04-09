import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Logo from "./assets/Logo.svg";
import { HashLink } from "react-router-hash-link";
import GlobalStyle from "./GlobalStyle";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "./Home";
import { News } from "./News";
import { Info } from "./Info";
import { Menu } from "./Menu";
import { Recruit } from "./Recruit";
import { Rent } from "./Rent";
import { NoMatch } from "./NoMatch";
import { LayoutNav } from "./components/LayoutNav";
import { NavigationBar } from "./components/NavigationBar";
import ScrollToTop from "./components/ScrollToTop";
import MenuItem from "./MenuItem";

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL + "/"}>
        <GlobalStyle />
        <ScrollToTop />
        <HashLink smooth to="#home">
          <div id="home">
            <Image className="HomeLogo" src={Logo} alt="HomeLogo" fluid />
          </div>
        </HashLink>
        <NavigationBar />

        <div className="contentWrapper">
          <LayoutNav>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/news" component={News} />
              <Route path="/menu" component={Menu} exact />
              <Route path="/menu/:id" component={MenuItem} />
              <Route path="/info" component={Info} />
              <Route path="/recruit" component={Recruit} />
              <Route path="/rent" component={Rent} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </LayoutNav>
        </div>
      </HashRouter>
    );
  }
}

export default App;
