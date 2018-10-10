import React from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute, NoMatch } from '@myie/interact-dom'
import CreditCard  from './CreditCard'
import { Alert } from 'reactstrap'

class Applications extends React.Component {

  render() {
    const { error } = this.props
    var re = new RegExp('^/applications[/]{0,1}$');
    if (this.props.location.pathname.match(re)) {
      return <Redirect to="/applications/card" />
    }

    return (
      <div id="applications">
        {error ? <Alert color="danger">{error}</Alert> : ''}
        <Switch>
          <PrivateRoute exact path="/applications/card" component={CreditCard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default Applications
