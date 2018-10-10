import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute, NoMatch } from '@myie/interact-dom'
import AccountsList from './List'
import AccountsDetails from './Details'
import { mapStateToProps, mapDispatchToProps } from '@myie/interact-accounts'
import { Alert } from 'reactstrap'


class Accounts extends React.Component {

  componentDidMount() {
    const { fetchAccountsIfNeeded } = this.props
    fetchAccountsIfNeeded()
  }

  render() {
    const { error } = this.props
    var re = new RegExp('^/accounts[/]{0,1}$');
    if (this.props.location.pathname.match(re)) {
      return <Redirect to="/accounts/list" />
    }
    return (
      <div id="accounts">
        {error ? <Alert color="danger">{error}</Alert> : ''}
        <Switch>
          <PrivateRoute exact path="/accounts/list" component={AccountsList} />
          <PrivateRoute path="/accounts/details/:id" component={AccountsDetails} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)
