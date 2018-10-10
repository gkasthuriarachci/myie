import React from "react"
import { Input, Label, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import Errors from './Errors'
import { Validate } from '@myie/interact'
import currency from 'react-currency-formatter'
import symbols from './symbols'

const Currency = (props) => {

    const { code, dp, children, validation = {}, labelClassName = "", groupClassName = "", showErrors = true, id, field, label, subLabel = "", onChange, onBlur, ...rest } = props
    const { value = "", state = {} } = validation

    const inputOverride = (e, dp, func) => {
        const { target = {} } = e; const { value = "" } = target
        if (dp > 0 && value.indexOf('.') !== -1 && value.length - value.indexOf('.') > dp + 1) {
            return
        }
        if (!target.validity.valid) { return }
        if (!value || !isNaN(parseFloat(value))) {
            func(e)
        }
    }


    var step = dp <= 0 ? "1" : "." + '0'.repeat(dp - 1) + '1'
    // added this cludge to find position of symbol as I didn't want to duplicate the react-currency-formatter code
    // there may be a better way to do this in the future
    var position = currency({ quantity: 0, currency: code, symbol: "!" })
    var fieldName = (typeof field === 'string' ? field : `${field[0]}[${field[1]}]`)
    const symbol = symbols[code] || code
    return (
        <div className={groupClassName}>
            <Label className={labelClassName} id={`${id}-label`} htmlFor={id}>{label}</Label>
            {subLabel.length > 0 ? <p>{subLabel} </p> : ""}
            <InputGroup >
                {position.startsWith('!') ? <InputGroupAddon addonType="prepend"><InputGroupText>{symbol}</InputGroupText></InputGroupAddon> : ""}
                <Input onBlur={(event) => inputOverride(event, dp, onBlur)} onChange={(event) => inputOverride(event, dp, onChange)} invalid={Validate.isInvalid(state)} valid={Validate.isValid(state)} id={id} name={fieldName} value={value} type="number" step={step} {...rest} />
                {position.endsWith('!') ? <InputGroupAddon addonType="append"><InputGroupText>{symbol}</InputGroupText></InputGroupAddon> : ""}
            </InputGroup>
            {children}
            {showErrors ? <Errors validation={validation} field={field} /> : ""}
        </div>
    );
}

export default Currency



