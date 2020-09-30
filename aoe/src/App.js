import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-routerd-dom';
import { Home } from './Home';
import { News } from './News';
import { Info } from './Info';
import { Menu } from './Menu';
import { Quality } from './Quality';
import { Recruit } from './Recruit';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/" component={News} />
            <Route path="/" component={Info} />
            <Route path="/" component={Menu} />
            <Route path="/" component={Quality} />
            <Route path="/" component={Recruit} />
            <Route component={NoMatch} />
          </Switch>
        </Router>

      </React.Fragment>
    );
  }
}

export default App;