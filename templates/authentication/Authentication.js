import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from "react-router-dom";
import Create from './Create'
import Update from './Update'
import Blocked from './Blocked'
import { NoMatch } from '@myie/interact-dom'
import { mapStateToProps, mapDispatchToProps } from '@myie/interact-authentication'
import { Alert } from 'reactstrap'

class Authentication extends React.Component {

    componentDidMount() {
        const { setReferrer, location } = this.props
        const { from } = location.state || { from: { pathname: "/accounts" } };
        setReferrer(from)
    }

    render() {
        const { error } = this.props
        var re = new RegExp('^/authentication[/]{0,1}$');
        if (this.props.location.pathname.match(re)) {

            return <Redirect to="/authentication/step-1" />
        }

        return (
            <div id="authentication">
                {error ? <Alert color="danger">{error}</Alert> : ''}
                <Switch>
                    <Route exact path="/authentication/step-1" component={Create} />
                    <Route exact path="/authentication/step-2" component={Update} />
                    <Route exact path="/authentication/blocked" component={Blocked} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)