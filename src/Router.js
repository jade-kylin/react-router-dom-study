import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import React, { Component } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={withRouter(Page1)} />
          <Route exact path="/page2" component={withRouter(Page2)} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Router