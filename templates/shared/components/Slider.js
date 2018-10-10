import React from "react"
import { Input, Label, Col, Row } from 'reactstrap'
import Errors from './Errors'
import { Validate } from '@myie/interact'

const Slider = (props) => {

    const { withInput, dp, children, validation = {}, labelClassName = "", inputClassName = "", groupClassName = "", showErrors = true, id, field, label, subLabel = "", onChange, onBlur, ...rest } = props
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
    var fieldName = (typeof field === 'string' ? field : `${field[0]}[${field[1]}]`)
    return (
        <div className={groupClassName}>
            <Label className={labelClassName} id={`${id}-label`} htmlFor={id}>{label}</Label>
            {subLabel.length > 0 ? <p>{subLabel} </p> : ""}
            <Row>
                <Col sm={withInput ? 9 : 12}>
                    <input style={{ width: "100%", height: "calc(2.25rem + 2px)" }} onBlur={(event) => inputOverride(event, dp, onBlur)} onChange={(event) => inputOverride(event, dp, onChange)} id={id} name={fieldName} value={value} type="range" step={step} {...rest} />
                </Col>
                {withInput ? <Col sm={3}>
                    <Input className={inputClassName} onBlur={(event) => inputOverride(event, dp, onBlur)} onChange={(event) => inputOverride(event, dp, onChange)} invalid={Validate.isInvalid(state)} valid={Validate.isValid(state)} id={`${id}-input`} name={fieldName} value={value} type="number" step={step} {...rest} />
                </Col> : ""}

            </Row>
            {children}
            {showErrors ? <Errors validation={validation} field={field} /> : ""}
        </div>
    );
}

export default Slider



