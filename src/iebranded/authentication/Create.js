import React from "react";
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Alert, Row, Col } from 'reactstrap'
import { Redirect, Link } from "react-router-dom";
import { Text, Check } from '@myie/interact-dom'
import { mapStateToProps, mapDispatchToProps } from '@myie/interact-authentication'
import { Session } from '@myie/interact'
import { Validate } from '@myie/interact'

class CreateLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                "username": {
                    rules: {
                        title: "Username",
                        stop: true,
                        required: true,
                    }
                },
                "password": {
                    rules: {
                        title: "Password",
                        required: true
                    }
                }
            }
        }
    }

    componentDidMount() {
        const { setReferrer, userLogout } = this.props
        const { referrer } = this.props || { referrer: { pathname: "/accounts" } };
        userLogout()
        setReferrer(referrer)
    }

    onChange = (e) => {
        const { name, value } = e.target
        var { form } = this.state
        form = Validate.input(name, value, form)
        this.setState({ ...this.state, form })
    }

    onBlur = (e) => {
        const { name, value } = e.target
        var { form } = this.state
        form = Validate.input(name, value, form, true)
        this.setState({ ...this.state, form })
    }

    submit = (e) => {
        e.preventDefault()
        const { createLogin } = this.props
        var { form } = this.state
        form = Validate.form(form)
        this.setState({ ...this.state, form })
        if (!form.approved) {
            return
        }
        const request = {
            "Username": form.username.value,
            "CredentialValues": [
                {
                    "Name": "Password",
                    "Value": form.password.value,
                    "Context": null
                }
            ],
            "ExtendedProperties": null
        }
        createLogin(request)
    };

    render() {
        const { form } = this.state
        if (Session.isAuthenticated()) {
            Session.abandon(null)
        }
        var error;
        if (this.props.login) {
            switch (this.props.login.Status) {
                case 'Failed': error = <Alert color="danger">Unknown Username/Password combination</Alert>
                    break
                case 'Blocked':
                    return <Redirect to='/authentication/blocked' />
                case 'CredentialBlocked': error = <Alert color="danger">This account has been blocked by due to too many login attempts</Alert>
                    break
                case 'Incomplete': return <Redirect to='/authentication/step-2' />
                default:
            }
        }
        return (
            <div>
                <h1 className='float-left'>Sign in</h1>
                <div className='float-right lead'>Step 1 of 2</div>
                <div className='clearfix' />
                {error ? error : ''}
                <p>Please complete the following. All fields are required.</p>
                <Form id="login-create-form" onSubmit={this.submit}>
                    <Row>
                        <Col sm={12} lg={6}>
                            <FormGroup>
                                <Text label="Enter your username" id="username" field="username" onChange={this.onChange} onBlur={this.onBlur} placeholder="User name" autoFocus={true} validation={form.username} />

                                <Link to='/authentication/forgotten-username' >Forgot your username?</Link>
                            </FormGroup>
                            <FormGroup>
                                <Text label="Enter your password" id="password" field="password" onChange={this.onChange} onBlur={this.onBlur} placeholder="Password" type="password" validation={form.password} />

                                <Link to='/authentication/forgotten-password' >Forgot your password?</Link>
                            </FormGroup>
                            <FormGroup>
                                <Check label="Remember me" id="remember-me" field='RememberMe' />
                            </FormGroup>
                            <p>You need to allow us to use 'cookies' for us to be able to do this. <Link to='/home/cookies'>Find out more</Link>.</p>
                            <FormGroup>
                                <Button id="login-create-submit" type="submit" color="primary">Continue</Button>{' '}
                                <Link className='btn btn-secondary' role="button" to='/'>Cancel</Link>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLogin)