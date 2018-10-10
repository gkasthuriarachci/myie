import React from "react"
import { Label, Input } from 'reactstrap'
import Errors from './Errors'
import { Validate } from '@myie/interact'

const DropDown = (props) => {

    const { children, validation = {}, labelClassName = "", groupClassName = "", showErrors = true, id, field, label,subLabel = "", ...rest } = props
    const { value = "", state = {} } = validation
    var fieldName = (typeof field === 'string' ? field : `${field[0]}[${field[1]}]`)
    return (
        <div className={groupClassName}>
            <Label className={labelClassName} id={`${id}-label`} htmlFor={id}>{label}</Label>
            {subLabel.length > 0 ? <p>{subLabel} </p> : ""}
            <Input type="select" name={fieldName} id={id} invalid={Validate.isInvalid(state)} valid={Validate.isValid(state)} value={value} {...rest}>
                {children}
            </Input>
            {showErrors ? <Errors validation={validation} field={field} /> : ""}
        </div>
    )
}

export default DropDown

