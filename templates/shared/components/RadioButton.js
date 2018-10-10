import React from "react";
import { Button } from 'reactstrap'

const RadioButton = (props) => {
    const { validation = {}, value: setValue, children, id, field, label, ...rest } = props
    const { value = "" } = validation
    var fieldName = (typeof field === 'string' ? field : `${field[0]}[${field[1]}]`)
    return (
        <Button color="primary" value={setValue} active={value === setValue} name={fieldName} {...rest}>{label}</Button>
    );
}

export default RadioButton