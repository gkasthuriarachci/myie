import React from "react";
import { connect } from 'react-redux'
import { Alert, FormGroup } from 'reactstrap'
import { Redirect, Link } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from '@myie/interact-authentication'

class Blocked extends React.Component {
    componentWillUnmount() {
        const { userLogout, } = this.props
        userLogout()
    }

    render() {
        if (!this.props.login) {
            return <Redirect to='/authentication/step-1' />
        }
        return (
            <div>
                <h1>Sign in</h1>
                <div />
                <Alert color="danger">
                    <p>Please contact our call centre so that we can help.</p>
                    <p><strong>Call: 0800 1234 5678 (charges may apply)</strong></p>
                    <p>
                        Calls will be charged at your standard mobile operator rate.
                    Our lines are open from 8am to 8pm, Monday to Saturday and from 9am to 5pm on Sundays.
                </p>
                </Alert>
                <FormGroup>
                    <Link className='btn btn-secondary' role="button" to='/'>Cancel</Link>
                </FormGroup>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blocked)