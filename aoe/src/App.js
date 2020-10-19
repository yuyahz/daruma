import React, { Component } from 'react';
import { Row, Col, Image, } from 'react-bootstrap';
import TopLogo from './MTL/TopLogo.svg';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home } from './Home';
import { News } from './News';
import { Info } from './Info';
import { Menu } from './Menu';
import { Recruit } from './Recruit';
import { Rent } from './Rent';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={{ span: 6, offset: 3 }}><Image className="TopLogo" src={TopLogo} alt="Logo" fluid /></Col>
        </Row>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/news" component={News} />
              <Route path="/info" component={Info} />
              <Route path="/menu" component={Menu} />
              <Route path="/recruit" component={Recruit} />
              <Route path="/rent" component={Rent} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;