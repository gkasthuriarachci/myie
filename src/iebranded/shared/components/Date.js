import React from "react"
import { Input, Label, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import Errors from './Errors'
import { Validate } from '@myie/interact'
import Datetime from 'react-datetime'

class Date extends React.Component {
    render() {
        const { calendar, children, validation = {}, labelClassName = "", groupClassName = "", showErrors = true, id, field, label, subLabel = "", onChange, onBlur, ...rest } = this.props
        const { value = "", state = {} } = validation
        var fieldName = (typeof field === 'string' ? field : `${field[0]}[${field[1]}]`)

        const renderInput = function (props, openCalendar, closeCalendar) {
            return (
                <button className="btn calendar" style={{ backgroundColor: "transparent", borderColor: "transparent" }} type="button" onClick={openCalendar}></button>
            );
        }

        const dateChange = (e) => {
            const val = (typeof e !== 'string') ? e.format("L") : e
            onBlur({
                target: {
                    name: fieldName,
                    value: val
                }
            })
        }

        return (
            <div className={groupClassName}>
                <Label className={labelClassName} id={`${id}-label`} htmlFor={id}>{label}</Label>
                {subLabel.length > 0 ? <p>{subLabel} </p> : ""}
                <div>
                    <InputGroup >
                        <Input id={id} invalid={Validate.isInvalid(state)} valid={Validate.isValid(state)} name={fieldName} onChange={onChange} onBlur={onBlur} value={value} {...rest} />
                        <InputGroupAddon addonType="append">
                            <InputGroupText style={{ padding: "0" }}>
                                <Datetime renderInput={renderInput} timeFormat={null} closeOnTab={true} onChange={dateChange} closeOnSelect={true} value={value} />
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                {children}
                {showErrors ? <Errors validation={validation} field={field} /> : ""}
            </div>
        );
    }
}

export default Date



