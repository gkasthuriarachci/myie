import React from 'react'
import { FormGroup } from 'reactstrap'

const RadioGroup = (props) => {
    const { legend, children, groupClassName = "", labelClassName = "", ...rest } = props

    return (
        <fieldset className={groupClassName}>
            <legend className={labelClassName}>{legend}</legend>
            <FormGroup className="button-group" {...rest} >
                {children}
            </FormGroup>
        </fieldset>
    )
}

export default RadioGroup


