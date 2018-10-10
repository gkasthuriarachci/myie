import React from 'react'
import { Form as FormUpdater, Validate } from '@myie/interact'
import { AddressLookup, Text, TextArea, Currency, Date, DropDown, Numeric, Slider, Check, RadioGroup, Radio, RadioButton } from '@myie/interact-dom'
import { Row, Col, Form, FormGroup, Button, ButtonGroup } from 'reactstrap'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                "textInput": {
                    rules: {
                        required: { message: "text input is required" }
                    }
                },
                "dateInput": {
                    rules: {
                        stop: true,
                        required: { message: "date input is required" },
                        date: { message: "date input is invalid", format: "dmy" }
                    }
                },
                "textareaInput": {
                    rules: {
                        required: { message: "textarea input is required" }
                    }
                },
                "sliderInput": {
                    rules: {
                        required: { message: "slider input is required" }
                    }
                },
                "maskedInput": {
                    rules: {
                        required: { message: "masked input is required" }
                    }
                },
                "gbpInput": {
                    rules: {
                        stop: true,
                        required: { message: "GBP input is required" },
                        format: { regex: /^\d+(?:\.\d{2})?$/, message: "GBP input must be a valid currency value" }
                    }
                },
                "yenInput": {
                    rules: {
                        stop: true,
                        required: { message: "YEN input is required" },
                        format: { regex: /^\d*$/, message: "YEN input must be a valid currency value" }
                    }
                },
                "integerInput": {
                    rules: {
                        stop: true,
                        required: { message: "integer input is required" },
                    }
                },
                "floatInput": {
                    rules: {
                        stop: true,
                        required: { message: "float input is required" },
                    }
                },
                "select": {
                    rules: {
                        required: { message: "selection is required" }
                    }
                },
                "check": {
                    rules: {
                        required: { message: "check box is required" }
                    }
                },
                "radio": {
                    rules: {
                        required: { message: "radio selection is required" }
                    }
                },
                "radioButton": {
                    rules: {
                        required: { message: "radio button selection is required" }
                    }
                }
            }

        }
    }

    onChange = (e) => {
        const form = FormUpdater.update(this.state.form, e.target)
        this.setState({ ...this.state, form })
    }

    onBlur = (e) => {
        const form = FormUpdater.update(this.state.form, e.target, true)
        this.setState({ ...this.state, form })
    }

    submit = (e) => {
        e.preventDefault()
        var form = Validate.form(this.state.form)
        this.setState({ ...this.state, form })
        if (!form.approved) {
            console.log("form valid.")
            return
        }
        console.log("form invalid!")
    };


    render() {
        const { form } = this.state
        return (
            <div>
                <Form id="test-form" onSubmit={this.submit}>
                    <Row>
                        <Col sm={12} lg={6}>
                            <FormGroup>
                                <AddressLookup label="address label" subLabel="sub-label" id="address" callback={this.addressCallback}/>

                            </FormGroup>
                            <FormGroup>
                                <Slider label="slider Input label" subLabel="sub-label" id="sliderInput" field="sliderInput" onChange={this.onChange} onBlur={this.onBlur} placeholder="rng" dp={1} validation={form.sliderInput} min={0} max={200} withInput />
                            </FormGroup>
                            <FormGroup>
                                <Text label="textInput label" subLabel="sub-label" id="textInput" field="textInput" onChange={this.onChange} onBlur={this.onBlur} placeholder="textInput placeholder" autoFocus={true} validation={form.textInput} />
                            </FormGroup>
                            <FormGroup>
                                <Date calendar label="dateInput label" subLabel="sub-label" id="dateInput" field="dateInput" onChange={this.onChange} onBlur={this.onBlur} placeholder="dateInput placeholder" validation={form.dateInput} />
                            </FormGroup>
                            <FormGroup>
                                <Text label="maskedInput label" subLabel="sub-label" id="maskedInput" field="maskedInput" onChange={this.onChange} onBlur={this.onBlur} placeholder="maskedInput placeholder" type="password" validation={form.maskedInput} />
                            </FormGroup>
                            <FormGroup>
                                <Currency label="gbp (2 dp) Input label" subLabel="sub-label" id="gbpInput" field="gbpInput" onChange={this.onChange} onBlur={this.onBlur} placeholder="gbpInput placeholder" code="GBP" dp={2} validation={form.gbpInput} />
                            </FormGroup>
                            <FormGroup>
                                <Currency label="yen (0 dp) Input label" subLabel="sub-label" id="yenInput" field="yenInput" onChange={this.onChange} onBlur={this.onBlur} placeholder="yenInput placeholder" code="JPY" dp={0} validation={form.yenInput} />
                            </FormGroup>
                            <FormGroup>
                                <Numeric label="float Input label" subLabel="sub-label" id="floatInput" field="floatInput" onChange={this.onChange} onBlur={this.onBlur} placeholder="floatInput placeholder" dp={4} validation={form.floatInput} />
                            </FormGroup>
                            <FormGroup>
                                <Numeric label="integer Input label" subLabel="sub-label" id="integerInput" field="integerInput" onChange={this.onChange} onBlur={this.onBlur} placeholder="integerInput placeholder" code="JPY" dp={0} validation={form.integerInput} />
                            </FormGroup>
                            <FormGroup>
                                <DropDown label="select label" subLabel="sub-label" id="select" field="select" onChange={this.onChange} onBlur={this.onBlur} placeholder="select placeholder" validation={form.select}>
                                    <option value="">select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </DropDown>
                            </FormGroup>
                            <FormGroup>
                                <Check label="check" id="check" field='check' onChange={this.onChange} onBlur={this.onBlur} validation={form.check} />
                            </FormGroup>
                            <FormGroup>
                                <RadioGroup validation={form.radio}>
                                    <Radio validation={form.radio} label={"One"} id="radio-1" onChange={this.onChange} onBlur={this.onBlur} onClick={this.onChange} value="1" field='radio' />
                                    <Radio validation={form.radio} label={"Two"} id="radio-2" onChange={this.onChange} onBlur={this.onBlur} onClick={this.onChange} value="2" field='radio' />
                                    <Radio validation={form.radio} label={"Three"} id="radio-3" onChange={this.onChange} onBlur={this.onBlur} onClick={this.onChange} value="3" field='radio' />
                                </RadioGroup>
                            </FormGroup>
                            <FormGroup>
                                <ButtonGroup>
                                    <RadioButton value="1" label="One" id="radioButton-1" field='radioButton' onChange={this.onChange} onClick={this.onChange} onBlur={this.onBlur} validation={form.radioButton} />
                                    <RadioButton value="2" label="Two" id="radioButton-2" field='radioButton' onChange={this.onChange} onClick={this.onChange} onBlur={this.onBlur} validation={form.radioButton} />
                                    <RadioButton value="3" label="Three" id="radioButton-3" field='radioButton' onChange={this.onChange} onClick={this.onChange} onBlur={this.onBlur} validation={form.radioButton} />
                                </ButtonGroup>
                            </FormGroup>
                            <FormGroup>
                                <TextArea rows={6} label="textareaInput label" subLabel="sub-label" id="textareaInput" field="textareaInput" onChange={this.onChange} onBlur={this.onBlur} placeholder="textareaInput placeholder" validation={form.textareaInput} />
                            </FormGroup>
                            <FormGroup>
                                <Button id="login-create-submit" type="submit" color="primary">Continue</Button>{' '}
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default Home