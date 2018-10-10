import React from "react";
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import { Redirect, Link } from "react-router-dom";
import { Errors } from '@myie/interact-dom'
import { mapStateToProps, mapDispatchToProps } from '@myie/interact-authentication'
import { Session } from '@myie/interact'
import { Validate } from '@myie/interact'




class UpdateLogin extends React.Component {
    constructor(props) {
        super(props)
        if (!props.login) {
            return
        }
        const contextStr = props.login.SignInTicket.Data.CredentialStates[0].Context.replace(/'/g, '"')
        const context = JSON.parse(contextStr)
        const pin = context.Positions
        this.state = {
            form: {
                pin: [{
                    value: "",
                    state: {},
                    rules: {
                        title: this.getOrdinal(pin[0] + 1),
                        required: { message: "{title} character required" }
                    }
                },
                {
                    value: "",
                    state: {},
                    rules: {
                        title: this.getOrdinal(pin[1] + 1),
                        required: { message: "{title} character required" }
                    }
                },
                {
                    value: "",
                    state: {},
                    rules: {
                        title: this.getOrdinal(pin[2] + 1),
                        required: { message: "{title} character required" }
                    }
                }]
            }
        }
    }

    getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
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
        const { updateLogin, login } = this.props
        var { form } = this.state
        form = Validate.form(form)
        this.setState({ ...this.state, form })
        if (!form.approved) {
            return
        }
        const request = {
            "Ticket": login.SignInTicket,
            "CredentialValues": [
                {
                    "Name": "Pin",
                    "Value": form.pin[0].value + form.pin[1].value + form.pin[2].value,
                    "Context": null
                }
            ],
            "ExtendedProperties": null
        }
        updateLogin(request)
    };

    render() {
        if (!this.props.login) {
            return <Redirect to='/authentication/step-1' />
        }
        var pin = []
        var error;
        const login = this.props.login
        switch (login.Status) {
            case "Success":
                Session.set(login.SessionTicket)
                return <Redirect to={this.props.referrer.pathname} />
            case 'Failed': error = <Alert color="danger">Memorable word characters incorrect</Alert>
                break
            case 'Blocked':
                return <Redirect to='/authentication/blocked' />
            case 'CredentialBlocked': error = <Alert color="danger">This account has been blocked by due to too many login attempts</Alert>
                break
            case 'Incomplete': error = null
                break
            default: error = <Alert color="danger">Returned unknown status {login.Status}</Alert>
        }
        const contextStr = login.SignInTicket.Data.CredentialStates[0].Context.replace(/'/g, '"')
        const context = JSON.parse(contextStr)
        pin = context.Positions

        return (
            <div>
                <h1 className='float-left'>Sign in</h1>
                <div className='float-right lead'>Step 2 of 2</div>
                <div className='clearfix' />
                {error ? error : ''}
                <Form id="login-update-form" onSubmit={this.submit}>
                    <div className="label">{`Enter the ${this.getOrdinal(pin[0] + 1)}, ${this.getOrdinal(pin[1] + 1)} and ${this.getOrdinal(pin[2] + 1)} characters of your memorable word`}</div>
                    <FormGroup>
                        <div>
                            <Label id="pin-value-1-label" htmlFor="pin-value-1" className="sr-only">Pin position 1</Label>
                            <Input invalid={Validate.isInvalid(this.state.form.pin[0].state)} valid={Validate.isValid(this.state.form.pin[0].state)} id="pin-value-1" name="pin[0]" onChange={this.onChange} onBlur={this.onBlur} maxLength={1} className='pin-input' type="password" autoFocus />{" - "}
                            <Label id="pin-value-2-label" htmlFor="pin-value-2" className="sr-only">Pin position 2</Label>
                            <Input invalid={Validate.isInvalid(this.state.form.pin[1].state)} valid={Validate.isValid(this.state.form.pin[1].state)} id="pin-value-2" name="pin[1]" onChange={this.onChange} onBlur={this.onBlur} maxLength={1} className='pin-input' type="password" />{" - "}
                            <Label id="pin-value-3-label" htmlFor="pin-value-3" className="sr-only">Pin position 3</Label>
                            <Input invalid={Validate.isInvalid(this.state.form.pin[2].state)} valid={Validate.isValid(this.state.form.pin[2].state)} id="pin-value-3" name="pin[2]" onChange={this.onChange} onBlur={this.onBlur} maxLength={1} className='pin-input' type="password" />
                            <Errors state={this.state.form.pin[0].state} field={["pin",0]} />
                            <Errors state={this.state.form.pin[1].state} field={["pin",1]} />
                            <Errors state={this.state.form.pin[2].state} field={["pin",2]} />
                        </div>
                        <Link to='/authentication/forgotten-password' >Forgot your memorable word?</Link>
                    </FormGroup>
                    <FormGroup>
                        <Button id="login-update-submit" type="submit" color="primary">Sign in</Button>{' '}
                        <Link className='btn btn-secondary' role="button" to='/'>Cancel</Link>
                    </FormGroup>
                </Form>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateLogin)