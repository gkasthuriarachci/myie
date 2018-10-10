import React from "react";
import { Input, Label } from 'reactstrap'
import Errors from './Errors'
import { Validate } from '@myie/interact'

const TextArea = (props) => {

    const { children, validation = {}, labelClassName = "", groupClassName = "", showErrors = true, id, field, label, subLabel = "", ...rest } = props
    const { value = "", state = {} } = validation
    var fieldName = (typeof field === 'string' ? field : `${field[0]}[${field[1]}]`)
    return (
        <div className={groupClassName} >
            <Label className={labelClassName} id={`${id}-label`} htmlFor={id}>{label}</Label>
            {subLabel.length > 0 ? <p>{subLabel} </p> : ""}
            <Input invalid={Validate.isInvalid(state)} valid={Validate.isValid(state)} value={value} id={id} name={fieldName} type="textarea" {...rest} />
            {children}
            {showErrors ? <Errors validation={validation} field={field} /> : ""}
        </div>
    );
}

export default TextArea



