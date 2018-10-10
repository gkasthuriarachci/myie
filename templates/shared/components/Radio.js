import React from "react";
import { Input, Label } from 'reactstrap'
import { Validate } from '@myie/interact'

const Radio = (props) => {
    const { validation = {}, value: setValue, children, id, field, className = "", labelClassName = "",groupClassName = "", label, ...rest } = props
    const { value = "", state = {} } = validation
    var fieldName = (typeof field === 'string' ? field : `${field[0]}[${field[1]}]`)
    return (
        <div className={`custom-control custom-radio ${groupClassName}`}>
            <Input invalid={Validate.isInvalid(state)} valid={Validate.isValid(state)} className={`custom-control-input ${className}`} id={id} type="radio" name={fieldName} value={setValue} defaultChecked={value === setValue} {...rest} />
            <Label className={`custom-control-label ${labelClassName}`} id={`${id}-label`} htmlFor={id} check>{label}</Label>
            {children}
        </div>
    );
}

export default Radio