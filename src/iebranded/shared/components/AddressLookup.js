import React from "react";
import { Card, CardTitle, CardBody, Input, Label, InputGroupAddon, InputGroupText, InputGroup, ListGroup, ListGroupItem, Alert } from 'reactstrap'
import { Form as FormUpdater, Validate, Connection } from '@myie/interact'

class AddressLookup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: {},
            response: {},
            form: {
                address: {
                    rules: {
                        required: true
                    }
                }
            }
        }
    }

    selectAddress = (e, address, callback) => {
        if (typeof callback === 'function') {
            callback(address)
        }
        this.setState({ ...this.state, error: {}, response: {} })
    }

    processAddresses = (json, callback) => {
        if (json.ResponseStatus === "Success") {
            this.setState({ ...this.state, response: json, error: null })
            if (json.Addresses.length === 1 && typeof callback === 'function') {
                callback(json.Addresses[0])
            }
        } else {
            this.setState({ ...this.state, error: {}, response: json })
        }
    }

    onChange = (e) => {
        const form = FormUpdater.update(this.state.form, e.target)
        this.setState({ ...this.state, form })
    }

    onClick = (e, callback) => {
        const { value = "", state = {} } = this.state.form.address

        const request = {
            Postcode: value,
            HouseNumber: ""
        }
        return fetch(Connection.baseUrl() + `/addresslookup/v1.0/addresses/find`,
            {
                method: "post",
                headers: Connection.headers(),
                body: JSON.stringify(request)
            })
            .then(response => Connection.errored(response))
            .then(response => response.json())
            .then(json => this.processAddresses(json, callback))
            .catch(error => this.setState({ ...this.state, error, response: {} }))
    }

    render() {
        const { children, validation = {}, labelClassName = "", groupClassName = "", showErrors = true, id, field, label, subLabel = "", callback, ...rest } = this.props
        const { value = "", state = {} } = this.state.form.address
        const { response = {}, error = {} } = this.state
        const addressComponents = []
        if (Array.isArray(response.Addresses)) {
            response.Addresses.forEach((address) => {
                addressComponents.push(<ListGroupItem tag="button" type="button" className="btn btn-default" onClick={(e) => this.selectAddress(e, address, callback)} style={{ textAlign: "left" }}>{address.BuildingName} {address.BuildingNumber} {address.AddressLine1} {address.Postcode}</ListGroupItem>)
            })
        }
        return (
            <div className={groupClassName} >
                <Label className={labelClassName} id={`${id}-label`} htmlFor={id}>{label}</Label>
                {subLabel.length > 0 ? <p>{subLabel} </p> : ""}
                <InputGroup>
                    <Input value={value} id={id}  {...rest} name="address" onChange={this.onChange} />
                    <InputGroupAddon addonType="append">
                        <InputGroupText style={{ padding: "0" }}>
                            <button className="btn search" type="button" onClick={(e) => this.onClick(e, callback)}></button>
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                {children}

                {error && error.message ?
                    <Alert className="mt-3" color="danger">{error.message}</Alert>
                    : ""
                }
                {response.ResponseStatus === "InvalidPostcodeFormat" ?
                    <Alert className="mt-3" color="danger">You have entered an invalide postcode format.</Alert>
                    : ""
                }
                {response.ResponseStatus === "NotFound" ?
                    <Alert className="mt-3" color="warning">No Address has been found for entered Postcode.</Alert>
                    : ""
                }
                {response.ResponseStatus === "Failed" ?
                    <Alert className="mt-3" color="warning">Postcode lookup is currently unavailable.</Alert>
                    : ""
                }
                {addressComponents.length === 1 ?
                    <Alert className="mt-3" color="success">A single Address has been found.</Alert>
                    : ""
                }
                {addressComponents.length > 1 ?
                    <div>
                        <Alert className="mt-3" color="success">Multiple Addresses have been found please select your address.</Alert>
                        <Card className="mt-3">

                            <ListGroup flush>
                                {addressComponents}
                            </ListGroup>
                        </Card>
                    </div>
                    : ""

                }
            </div>
        )
    }
}

export default AddressLookup