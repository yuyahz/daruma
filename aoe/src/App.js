import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-routerd-dom';

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
