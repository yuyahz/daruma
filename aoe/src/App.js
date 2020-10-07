import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home } from './Home';
import { Info } from './Info';
import { Menu } from './Menu';
import { News } from './News';
import { NoMatch } from './NoMatch';
import { Quality } from './Quality';
import { Recruit } from './Recruit';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import TopLogo from './MTL/TopLogo.svg';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <img className="TopLogo" src={TopLogo} alt="Logo"></img>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/" component={Info} />
              <Route path="/" component={Menu} />
              <Route path="/" component={News} />
              <Route path="/" component={Quality} />
              <Route path="/" component={Recruit} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;