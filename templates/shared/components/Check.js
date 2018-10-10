import React from "react";
import { Input, Label } from 'reactstrap'
import Errors from './Errors'
import { Validate } from '@myie/interact'

const Check = (props) => {
    const { showErrors = true, validation = {}, children, id, field, className = "", labelClassName = "", groupClassName = "", label, ...rest } = props
    const { value = "", state = {} } = validation
    var fieldName = (typeof field === 'string' ? field : `${field[0]}[${field[1]}]`)
    return (
        <div>
            <div className={`custom-control custom-checkbox ${groupClassName}`}>
                <Input invalid={Validate.isInvalid(state)} valid={Validate.isValid(state)} className={`custom-control-input ${className}`} id={id} disabled={props.disabled} type="checkbox" name={fieldName} value={value} {...rest} />
                <Label className={`custom-control-label ${labelClassName}`} check id={`${id}-label`} htmlFor={id}>{label}</Label>
                {children}

            </div>
            {showErrors ? <Errors validation={validation} field={field} /> : ""}
        </div>
    );
}

export default Check