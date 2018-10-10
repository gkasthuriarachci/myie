import React from "react";
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from '@myie/interact-authentication'
import { Session } from '@myie/interact'

class AuthIndicator extends React.Component {
    render() {
        const { history, userLogout } = this.props

        return Session.isAuthenticated() ? (
            <div className="form-inline">
                <span>Welcome!&nbsp;</span>
                <Button color="info" size="xs"
                    onClick={() => {
                        Session.abandon()
                        userLogout()
                        history.push("/")
                    }}
                >
                    Sign out
            </Button>
            </div>
        ) : (
                <div>You are not logged in.{" "}
                    <Button color="primary" size="xs"
                        onClick={() => {
                            Session.abandon()
                            history.push("/authentication")
                        }}
                    >
                        Sign in
        </Button></div>
            )
    }
}

const AuthButton = withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthIndicator))

export default AuthButton