import React from "react";
import { FormFeedback } from 'reactstrap'

const Errors = (props) => {
    const { validation = {}, field, ...rest } = props
    const { state = {}, rules = {} } = validation
    var fieldName = (typeof field === 'string' ? field : `${field[0]}-${field[1]}`)
    const { approval = {}, dirty } = state
    const children = []
    if (!approval.failed || !dirty) {
        return ''
    }
    approval.failed.forEach((failed) => {
        if (!approval[failed].approved) {
            var i = 0
            approval[failed].errors.forEach((error) => {
                if (rules && rules[failed].trans && typeof rules[failed].trans === 'function') {
                    children.push(<div id={`error-${fieldName}-${failed}-${i}`} key={`${failed}-${i}`}>{rules[failed].trans()}</div>)
                } else {
                    children.push(<div id={`error-${fieldName}-${failed}-${i}`} key={`${failed}-${i}`}>{error}</div>)
                }
            })
        }
    })
    return (
        children.length ? (
            <FormFeedback {...rest}>
                {children}
            </FormFeedback>
        ) : ""
    );
}

export default Errors