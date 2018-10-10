import React from 'react'
import { Form as FormUpdater, Validate } from '@myie/interact'
import { AddressLookup, Text, DropDown, Check, TextArea, RadioGroup, Radio } from '@myie/interact-dom'
import { Row, Col, Form, FormGroup, Button, ButtonGroup, Collapse } from 'reactstrap'
import { FaPencilAlt } from 'react-icons/fa';

import AddressForm from './AddressForm'

class CreditCard extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            about_you: false,
            address_details: false,
            your_finances: false,
            optional_benefits: false,
            section_five: true,

            manual_address: false,
            residential_status: false,
            select_address: false,
            noAddressSelected: false,

            paying_by_debit: false,

            income_and_outgoings: false,
            employer_details: false,

            about_you_form: {
                "title": {
                    rules: {
                        required: { message: "Please tell us your title" }
                    },
                },
                "first_name": {
                    rules: {
                        required: { message: "Please enter your first name" }
                    }
                },
                "middle_name": {
                    rules: {
                        
                    }
                },
                "last_name": {
                    rules: {
                        required: { message: "Please enter your last name" }
                    }
                },
                "previous_name": {
                    rules: {
                        
                    }
                },
                "gender": {
                    rules: {
                        required: { message: "Please tell us your gender" }
                    }
                },
                "b_day": {
                    rules: {
                        required: { message: "Please tell us your date of birth" }
                    }
                },
                "b_month": {
                    rules: {
                        required: { message: "Please tell us your date of birth" }
                    }
                },
                "b_year": {
                    rules: {
                        required: { message: "Please tell us your date of birth" }
                    }
                },
                "marital_status": {
                    rules: {
                        required: { message: "Please tell us your marital status" }
                    }
                },
                "nationality": {
                    rules: {
                        required: { message: "Please tell us your nationality" }
                    }
                },
                "resident": {
                    rules: {
                        required: { message: "Please confirm that you are a UK resident" }
                    }
                },
                "mobile": {
                    rules: {
                        required: { message: "Please enter your mobile phone number" },
                        format: { regex: /^(?:\+|0)\s*(\d[\s-]*){1,14}\s*$/, message: "You have entered an invalid mobile phone number. Please try again" }
                    }
                },
                "other_phone": {
                    rules: {
                        
                    }
                },
                "email": {
                    rules: {
                        required: { message: "Please enter your email address" },
                        format: { regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, message: "Please check your email address" }
                    }
                },
                "email_confirm": {
                    rules: {
                        required: { message: "Email addresses do not match" }
                    }
                },
            },

            address_details_form: {
                "house_number": {
                    rules: {
                        
                    }
                },
                "house_name": {
                    rules: {
                        
                    }
                },
                "postcode": {
                    rules: {
                        required: { message: "Please enter your postcode" },
                        format: { regex: /^[a-zA-Z0-9]{8}$/, message: "Please enter your postcode in a valid UK postcode format"}
                    }
                }
            },

            custom_address_details_form: {
                "flat_number": {
                    rules: {
                        
                    }
                },
                "street": {
                    rules: {
                        required: { message: "Please enter the street name" }
                    }
                },
                "district": {
                    rules: {
                        
                    }
                },
                "city": {
                    rules: {
                        required: { message: "Please enter your town or city" }
                    }
                },
                "county": {
                    rules: {
                        
                    }
                }
            },

            residential_address_details_form: {
                "residential_status": {
                    rules: {
                        required: { message: "Please tell us your residential status" }
                    }
                },
                "living_month": {
                    rules: {
                        required: { message: "Please select the date when you started living there" }
                    }
                },
                "living_year": {
                    rules: {
                        required: { message: "Please select the date when you started living there" }
                    }
                }
            },

            select_address_details_form: {
                "select_address": {
                    rules: {
                        
                    }
                }
            },

            your_finances_form: {
                "account_number": {
                    rules: {
                        required: { message: "Please enter your account number" },
                        format: { regex: /^[0-9]{8}\s*$/, message: "Please check your account number"}
                    }
                },
                "sort_code_1": {
                    rules: {
                        required: { message: "Please enter your sort code" }
                    }
                },
                "sort_code_2": {
                    rules: {
                        required: { message: "Please enter your sort code" }
                    }
                },
                "sort_code_3": {
                    rules: {
                        required: { message: "Please enter your sort code" }
                    }
                },
                "account_month": {
                    rules: {
                        required: { message: "Please tell us how long you’ve had this account" }
                    }
                },
                "account_year": {
                    rules: {
                        required: { message: "Please tell us how long you’ve had this account" }
                    }
                },
                "employment_status": {
                    rules: {
                        required: { message: "Please tell us your employment status" }
                    }
                }
            },

            direct_debit_form: {
                "pay_amount": {
                    rules: {
                        
                    }
                },
                "owner_agree_terms": {
                    rules: {
                        required: { message: "Please confirm the Direct Debit instruction" }
                    }
                }
            },

            employer_details_form: {
                "employer_name": {
                    rules: {
                        required: { message: "Please enter your employer name" },
                    }
                },
                "building_number": {
                    rules: {
                        
                    }
                },
                "building_name": {
                    rules: {
                        
                    }
                },
                "employer_postcode": {
                    rules: {
                        required: { message: "Please enter your postcode" },
                        format: { regex: /^[a-zA-Z0-9]{8}$/, message: "Please enter your postcode in a valid UK postcode format"}
                    }
                }
            },

            income_and_outgoings_form: {
                "annual_income": {
                    rules: {
                        required: { message: "Please enter your gross annual income" },
                        format: { regex: /^\s*£?\s*\d{1,3}(?:(?:,|\s)?\d{3})*(?:\.\d{2})?\s*$/, message: "Please enter a valid amount" }
                    }
                },
                "partner_annual_income": {
                    rules: {
                        
                    }
                },
                "monthly_outgoings": {
                    rules: {
                        required: { message: "Please enter your monthly outgoings" },
                        format: { regex: /^\s*£?\s*\d{1,3}(?:(?:,|\s)?\d{3})*(?:\.\d{2})?\s*$/, message: "Please enter a valid amount" }
                    }
                }
            },

            optional_benefits_form: {
                "transfer": {
                    rules: {
                        
                    }
                },
                "another_holder": {
                    rules: {
                        
                    }
                },
                "keep_touch": {
                    rules: {
                        
                    }
                },
                "send_by_email": {
                    rules: {
                        
                    }
                },
            },
        }

    }

    manualAddress = () => {
        const manual_address = true;
        const select_address = false
        const residential_status = true
        this.setState({ ...this.state, manual_address, select_address, residential_status });
    }

    searchForAddress =() => {
        const manual_address = false;
        const select_address = false
        const residential_status = false
        this.setState({ ...this.state, manual_address, select_address, residential_status });
    }

    findAddress = () => {
        const address_details_form = Validate.form(this.state.address_details_form)
        this.setState({ ...this.state, address_details_form })

        if(address_details_form.approved){
            const manual_address = false
            const select_address = true
            const noAddressSelected = false
            this.setState({ manual_address, select_address, noAddressSelected });
        }else{
            const noAddressSelected = true
            this.setState({ ...this.state, noAddressSelected })
        }
        
    }

    togglePayingByDebit = (status) => {
        if(status === 'yes'){
            this.setState({ ...this.state, paying_by_debit: true });
        }else {
            this.setState({ ...this.state, paying_by_debit: false });
        }
    }

    onEmployentStatus = (value) => {
        let income_and_outgoings = false
        let employer_details = false
        if(value === ''){
            income_and_outgoings = false
            employer_details = false
        }else if(value === 'Full-time employed'){
            employer_details = true
            income_and_outgoings = false
        }else {
            employer_details = false
            income_and_outgoings = true
        }

        this.setState({ ...this.state, income_and_outgoings: income_and_outgoings, employer_details: employer_details });
    }

    toggle = (section) => {
        switch(section) {
            case 'about_you_form': 
                this.setState({ ...this.state, about_you: !this.state.about_you });
                return
            case 'address_details_form':
                this.setState({ ...this.state, address_details: !this.state.address_details });
                return
            case 'your_finances_form':
                this.setState({ ...this.state, your_finances: !this.state.your_finances });
                return
            case 'optional_benefits_form':
                this.setState({ ...this.state, optional_benefits: !this.state.optional_benefits });
                return
            case 'section_five':
                this.setState({ ...this.state, section_five: !this.state.section_five });
                return
        }
    }

    onChange = (selected_form, e) => {
        // To do
        // var a = {}
        // a[selected_form] = FormUpdater.update(selected_form_obj, e.target)
        // this.setState({ ...this.state, a })

        switch(selected_form) {
            case 'about_you_form':
                const about_you_form = FormUpdater.update(this.state.about_you_form, e.target)
                this.setState({ ...this.state, about_you_form })
                return
            case 'address_details_form':
                const address_details_form = FormUpdater.update(this.state.address_details_form, e.target)
                this.setState({ ...this.state, address_details_form })
                return
            case 'custom_address_details_form':
                const custom_address_details_form = FormUpdater.update(this.state.custom_address_details_form, e.target)
                this.setState({ ...this.state, custom_address_details_form })
               return
            case 'residential_address_details_form':
                const residential_address_details_form = FormUpdater.update(this.state.residential_address_details_form, e.target)
                this.setState({ ...this.state, residential_address_details_form })
                return
            case 'your_finances_form':
                // To do
                //(e.target.id === 'employment_status')? this.onEmployentStatus(e.target.value) : null

                let income_and_outgoings = false
                let employer_details = false
                if(e.target.id === 'employment_status'){
                    const value = e.target.value
                    
                    if(value === 'Full-time employed' || value === 'Part-time employed' || value === 'Self-employed'){
                        employer_details = true
                        income_and_outgoings = true
                    }else if(value !== ''){
                        income_and_outgoings = true
                        employer_details = false
                    }else {
                        employer_details = false
                        income_and_outgoings = false
                    }
                }
                
                const your_finances_form = FormUpdater.update(this.state.your_finances_form, e.target) 
                this.setState({ ...this.state, your_finances_form, income_and_outgoings, employer_details })
                return
            case 'direct_debit_form':
                const direct_debit_form = FormUpdater.update(this.state.direct_debit_form, e.target) 
                this.setState({ ...this.state, direct_debit_form })
                return
            case 'employer_details_form':
                const employer_details_form = FormUpdater.update(this.state.employer_details_form, e.target) 
                this.setState({ ...this.state, employer_details_form })
                return
            case 'income_and_outgoings_form':
                const income_and_outgoings_form = FormUpdater.update(this.state.income_and_outgoings_form, e.target) 
                this.setState({ ...this.state, income_and_outgoings_form })
                return
            case 'optional_benefits_form':
                const optional_benefits_form = FormUpdater.update(this.state.optional_benefits_form, e.target)
                this.setState({ ...this.state, optional_benefits_form })
                return
        }
    }

    onBlur = (selected_form, e) => {
        // To do
        // var a = {}
        // a[selected_form] = FormUpdater.update(selected_form_obj, e.target)
        // this.setState({ ...this.state, a })

        switch(selected_form) {
            case 'about_you_form':
                const about_you_form = FormUpdater.update(this.state.about_you_form, e.target, true)
                this.setState({ ...this.state, about_you_form })
                return
            case 'address_details_form':
                const address_details_form = FormUpdater.update(this.state.address_details_form, e.target, true)
                this.setState({ ...this.state, address_details_form })
                return
            case 'custom_address_details_form':
                const custom_address_details_form = FormUpdater.update(this.state.custom_address_details_form, e.target, true)
                this.setState({ ...this.state, custom_address_details_form })
                return
            case 'residential_address_details_form':
                const residential_address_details_form = FormUpdater.update(this.state.residential_address_details_form, e.target, true)
                this.setState({ ...this.state, residential_address_details_form })
                return
            case 'your_finances_form':
                const your_finances_form = FormUpdater.update(this.state.your_finances_form, e.target, true) 
                this.setState({ ...this.state, your_finances_form })
                return
            case 'direct_debit_form':
                const direct_debit_form = FormUpdater.update(this.state.direct_debit_form, e.target, true) 
                this.setState({ ...this.state, direct_debit_form })
                return
            case 'employer_details_form':
                const employer_details_form = FormUpdater.update(this.state.employer_details_form, e.target, true) 
                this.setState({ ...this.state, employer_details_form })
                return
            case 'income_and_outgoings_form':
                const income_and_outgoings_form = FormUpdater.update(this.state.income_and_outgoings_form, e.target, true) 
                this.setState({ ...this.state, income_and_outgoings_form })
                return
            case 'optional_benefits_form':
                const optional_benefits_form = FormUpdater.update(this.state.optional_benefits_form, e.target, true)
                this.setState({ ...this.state, optional_benefits_form })
                return
        }
    }

    continue = (section, submitSave) => {
        let form = null;

        if( section === 'about_you_form' ){
            const about_you_form = Validate.form(this.state.about_you_form)
            this.setState({ ...this.state, about_you_form })
            form = about_you_form

        }else if( section === 'address_details_form' ){
            const address_details_form = Validate.form(this.state.address_details_form)
            form = address_details_form

            let custom_address_details_form =this.state.custom_address_details_form
            let residential_address_details_form =this.state.residential_address_details_form

            let noAddressSelected = false

            if(this.state.manual_address){
                custom_address_details_form = Validate.form(custom_address_details_form)
                if(!custom_address_details_form.approved){
                    form.approved = false
                }
            }

            if(this.state.residential_status){
                residential_address_details_form = Validate.form(residential_address_details_form)
                if(!residential_address_details_form.approved){
                    form.approved = false
                }
            }

            if(!this.state.select_address && form.approved){
                form.approved = false
                noAddressSelected = true
            }

            this.setState({ ...this.state, address_details_form, custom_address_details_form, residential_address_details_form, noAddressSelected })

        }else if( section === 'your_finances_form' ){
            const your_finances_form = Validate.form(this.state.your_finances_form)
            form = your_finances_form

            let direct_debit_form = this.state.direct_debit_form
            let employer_details_form = this.state.employer_details_form
            let income_and_outgoings_form = this.state.income_and_outgoings_form

            if(this.state.paying_by_debit){
                direct_debit_form = Validate.form(direct_debit_form)
                if(!direct_debit_form.approved){
                    form.approved = false
                }
            }
            if(this.state.employer_details){
                employer_details_form = Validate.form(employer_details_form)
                if(!employer_details_form.approved){
                    form.approved = false
                }
            }
            if(this.state.income_and_outgoings){
                income_and_outgoings_form = Validate.form(income_and_outgoings_form)
                if(!income_and_outgoings_form.approved){
                    form.approved = false
                }
            }

            this.setState({ ...this.state, your_finances_form, direct_debit_form, employer_details_form, income_and_outgoings_form })

        }else if( section === 'optional_benefits_form' ){
            const optional_benefits_form = Validate.form(this.state.optional_benefits_form)
            this.setState({ ...this.state, optional_benefits_form })
            form = optional_benefits_form

        }

        if(submitSave === 'save'){
            console.log(section, " form save.", form)
            this.toggle(section)
        }else if (submitSave === 'submit' && form.approved) {
            this.toggle(section)
            console.log(section, " form submit.", form)
        }else {
            console.log(section, " form invalid!", form)
        }
        
    }

    submitAll = (submitSave) => {
        let { about_you_form } = this.state

        let { address_details_form } = this.state
        let { custom_address_details_form } = this.state
        let { residential_address_details_form } = this.state

        let { your_finances_form } = this.state

        let direct_debit_form = this.state.direct_debit_form
        let employer_details_form = this.state.employer_details_form
        let income_and_outgoings_form = this.state.income_and_outgoings_form

        let { optional_benefits_form } = this.state

        about_you_form = Validate.form(about_you_form)
        address_details_form = Validate.form(address_details_form)
        custom_address_details_form = Validate.form(custom_address_details_form)
        residential_address_details_form = Validate.form(residential_address_details_form)
        your_finances_form = Validate.form(your_finances_form)
        optional_benefits_form = Validate.form(optional_benefits_form)
       
        if(this.state.manual_address){
            custom_address_details_form = Validate.form(custom_address_details_form)
        }

        if(this.state.residential_status){
            residential_address_details_form = Validate.form(residential_address_details_form)
        }

        if(this.state.paying_by_debit){
            direct_debit_form = Validate.form(direct_debit_form)
        }
        if(this.state.employer_details){
            employer_details_form = Validate.form(employer_details_form)
        }
        if(this.state.income_and_outgoings){
            income_and_outgoings_form = Validate.form(income_and_outgoings_form)
        }

        if(submitSave === 'save'){
            console.log("form save.", about_you_form, address_details_form, custom_address_details_form, your_finances_form, optional_benefits_form)
            this.setState({ 
                about_you: false,
                address_details: false,
                your_finances: false,
                optional_benefits: false
            })
        }else if (about_you_form.approved && address_details_form.approved && custom_address_details_form.approved && your_finances_form.approved && optional_benefits_form.approved) {
            console.log("form submit.", about_you_form, address_details_form, custom_address_details_form, your_finances_form, optional_benefits_form)
            this.setState({ 
                about_you: false,
                address_details: false,
                your_finances: false,
                optional_benefits: false
            })
        }else {
            console.log("form invalid!")
            this.setState({ 
                about_you: !about_you_form.approved,
                address_details: !address_details_form.approved,
                your_finances: !your_finances_form.approved,
                optional_benefits: !optional_benefits_form.approved,
                about_you_form,
                address_details_form,               
                your_finances_form,               
                optional_benefits_form
            })
        }
    }

    render() {
        const { about_you_form } = this.state
        
        const { address_details_form } = this.state
        const { custom_address_details_form } = this.state
        const { residential_address_details_form } = this.state
        const { select_address_details_form } = this.state
        
        const { your_finances_form } = this.state
        const { direct_debit_form } = this.state
        const { employer_details_form } = this.state
        const { income_and_outgoings_form } = this.state

        const { optional_benefits_form } = this.state
        
        return (
            <div id="credit-card">
                <h1>Credit Card application</h1>
                <p>Please complete the following, it should only take a few minutes.</p>
                <p> All information is required unless otherwise specified.</p>
                <p>During the application you can click <strong>Save for later</strong> to store your details and then return and continue later.</p>
                {/* about_you_form */}
                <div>
                    <Row>
                        <Col>
                            <h2>2. About you</h2>
                        </Col>
                        <Col>
                            <Collapse isOpen={!this.state.about_you}>
                                <Button  
                                    onClick={()=> this.toggle('about_you_form')} 
                                    color="link"
                                    className="float-right"
                                >
                                Edit <FaPencilAlt />
                                </Button>
                            </Collapse>
                        </Col>
                    </Row>
                    <Collapse isOpen={!this.state.about_you}>
                        <Row>
                            <Col> 
                                <p>{about_you_form.title.value} {about_you_form.first_name.value} {about_you_form.middle_name.value} {about_you_form.last_name.value}</p>
                                <p>{about_you_form.previous_name.value}</p>
                                <p>{about_you_form.gender.value}</p>
                                <p>{about_you_form.b_day.value} {about_you_form.b_month.value} {about_you_form.b_year.value}</p>
                                <p>{about_you_form.marital_status.value}</p>
                                <p>{about_you_form.nationality.value}</p>
                            </Col>
                            <Col>
                                <h3>Contact details</h3>
                                <p>{about_you_form.mobile.value}</p>
                                <p>{about_you_form.other_phone.value}</p>
                                <p>{about_you_form.email.value}</p>
                            </Col>
                        </Row>
                    </Collapse>
                    <Collapse isOpen={this.state.about_you}>
                        <p>First we need to collect your basic personal details.</p>
                        <div>
                            <Form id="about_you_form" onSubmit={this.submit}>
                                <Row>
                                    <Col sm={12} lg={6}>
                                        <FormGroup>
                                            <DropDown subLabel="Title" id="title" field="title" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.title}>
                                                <option value="">(Select one)</option>
                                                <option value="Mr.">Mr.</option>
                                                <option value="Mrs.">Mrs.</option>
                                                <option value="Ms.">Ms.</option>
                                                <option value="Dr.">Dr.</option>
                                                <option value="Rev.">Rev.</option>
                                                <option value="Sir">Sir</option>
                                                <option value="Dame">Dame</option>
                                                <option value="Lord">Lord</option>
                                                <option value="Lady">Lady</option>
                                                <option value="Captain">Captain</option>
                                            </DropDown>
                                        </FormGroup>
                                        <FormGroup>
                                            <Text subLabel="First name" id="first_name" field="first_name" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.first_name} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Text subLabel="Middle name (optional)" id="middle_name" field="middle_name" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.middle_name} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Text subLabel="Last name" id="last_name" field="last_name" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.last_name} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Text subLabel="Any previous name (optional)" id="previous_name" field="previous_name" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.previous_name} />
                                        </FormGroup>
                                        <FormGroup>
                                            <DropDown subLabel="Gender" id="gender" field="gender" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.gender}>
                                                <option value="">(Select one)</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </DropDown>
                                        </FormGroup>
                                        <FormGroup>
                                            <ButtonGroup>
                                                <DropDown id="b_day" field="b_day" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.b_day}>
                                                    <option value="">Day</option>
                                                    <option value="1">1</option>
                                                    
                                                </DropDown>
                                                {' '}
                                                <DropDown id="b_month" field="b_month" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.b_month}>
                                                    <option value="">Month</option>
                                                    <option value="1">1</option>
                                                    
                                                </DropDown>
                                                {' '}
                                                <DropDown id="b_year" field="b_year" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.b_year}>
                                                    <option value="">Year</option>
                                                    <option value="1">1</option>
                                                    
                                                </DropDown>
                                            </ButtonGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <DropDown subLabel="Marital status" id="marital_status" field="marital_status" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.marital_status}>
                                                <option value="">(select one)</option>
                                                <option value="Single">Single</option>
                                                <option value="Married">Married</option>
                                                <option value="Divorced">Divorced</option>
                                                <option value="Civil partnership">Civil partnership</option>
                                            </DropDown>
                                        </FormGroup>
                                        <FormGroup>
                                            <DropDown subLabel="Your nationality" id="nationality" field="nationality" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.nationality}>
                                                <option value="">(select one)</option>
                                                <option value="British">British</option>
                                                <option value="Non British">Non British</option>
                                            </DropDown>
                                        </FormGroup>
                                        <p>You must be a UK resident to apply for a card</p>
                                        <FormGroup>
                                            <Check label="I confirm that I am a UK resident" id="resident" field='resident' onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.resident} />
                                        </FormGroup>
                                        <h3>Contact details</h3>
                                        <p>Now enter your contact information.</p>
                                        <FormGroup>
                                            <Text subLabel="Mobile number" id="mobile" field="mobile" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.mobile} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Text subLabel="Other phone number (optional)" id="other_phone" field="other_phone" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.other_phone} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Text subLabel="Email address" id="email" field="email" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.email} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Text subLabel="Confirm your email address" id="email_confirm" field="email_confirm" onChange={(e)=> this.onChange('about_you_form', e)} onBlur={(e)=> this.onBlur('about_you_form', e)} validation={about_you_form.email_confirm} />
                                        </FormGroup>
                                        <p><strong>We will use your email address to send you emails to send you information about your application and account, and to notify you when your online statement is ready to view.</strong></p>

                                        <FormGroup>
                                            <Button 
                                                id="about_you_continue" 
                                                type="button" 
                                                color="primary"
                                                onClick={()=> this.continue('about_you_form', 'submit')}
                                            >
                                                Continue
                                            </Button>
                                            {' '}
                                            <Button 
                                                id="about_you_save" 
                                                type="button" 
                                                outline
                                                color="primary"
                                                onClick={()=> this.continue('about_you_form', 'save')}
                                            >
                                                Save for later
                                            </Button>
                                            {' '}
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Collapse>
                </div>
                {/* address details */}
                <div>
                    <Row>
                        <Col>
                            <h2>3. Address details</h2>
                        </Col>
                        <Col>
                            <Collapse isOpen={!this.state.address_details}>
                                <Button  
                                    onClick={()=> this.toggle('address_details_form')} 
                                    color="link"
                                    className="float-right"
                                >
                                Edit <FaPencilAlt />
                                </Button>
                            </Collapse>
                        </Col>
                    </Row>
                    <Collapse isOpen={!this.state.address_details}>
                        
                    </Collapse>
                    <Collapse isOpen={this.state.address_details}>
                        <p>Please enter your address details. We support BFPO (British Forces Post Office) too, so if you are a member of the British armed forces please continue to complete this form.</p>
                        <h2>Current address</h2>
                        <Collapse isOpen={this.state.noAddressSelected}>
                            <p>Please complete your postcode and use the buttons below to find your address or fill your address in manually.</p>
                        </Collapse>
                        <div>
                            <Form>
                                <Row>
                                    <Col sm={12} lg={6}>
                                        
                                        <AddressForm 
                                            manual_address={this.state.manual_address} 

                                            custom_address_details_form={custom_address_details_form} 
                                            address_details_form={address_details_form}
                                            residential_address_details_form={residential_address_details_form}
                                            select_address_details_form={select_address_details_form}

                                            searchForAddress={this.searchForAddress}
                                            findAddress={this.findAddress}
                                            manualAddress={this.manualAddress}

                                            select_address={this.state.select_address}
                                            residential_status={this.state.residential_status}

                                            onChange={this.onChange}
                                            onBlur={this.onBlur}
                                        />

                                        <FormGroup>
                                            <Button 
                                                id="address_details_continue" 
                                                type="button" 
                                                color="primary"
                                                onClick={()=> this.continue('address_details_form', 'submit')}
                                            >
                                                Continue
                                            </Button>
                                            {' '}
                                            <Button 
                                                id="address_details_save" 
                                                type="button"
                                                outline
                                                color="primary"
                                                onClick={()=> this.continue('address_details_form', 'save')}
                                            >
                                                Save for later
                                            </Button>
                                            {' '}
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Collapse>
                </div>
                {/* your finances */}
                <div>
                    <Row>
                        <Col>
                            <h2>4. Your finances</h2>
                        </Col>
                        <Col>
                            <Collapse isOpen={!this.state.your_finances}>
                                <Button  
                                    onClick={()=> this.toggle('your_finances_form')} 
                                    color="link"
                                    className="float-right"
                                >
                                Edit <FaPencilAlt />
                                </Button>
                            </Collapse>
                        </Col>
                    </Row>
                    <Collapse isOpen={!this.state.your_finances}>
                        <p>{your_finances_form.account_number.value}</p>
                    </Collapse>
                    <Collapse isOpen={this.state.your_finances}>
                        <h2>Your bank details</h2>
                        <div>
                            <Form>
                                <Row>
                                    <Col sm={12} lg={6}>
                                        <FormGroup>
                                            <Text subLabel="Account number" id="account_number" field="account_number" onChange={(e)=> this.onChange('your_finances_form', e)} onBlur={(e)=> this.onBlur('your_finances_form', e)} validation={your_finances_form.account_number} />
                                        </FormGroup>
                                        <p>Account not in your name? <a>Download Direct Debit instruction form</a></p>
                                        <FormGroup>
                                            <p>Sort code</p>
                                            <ButtonGroup>
                                                <Text id="sort_code_1" field="sort_code_1" maxlength="2" onChange={(e)=> this.onChange('your_finances_form', e)} onBlur={(e)=> this.onBlur('your_finances_form', e)} validation={your_finances_form.sort_code_1}/>
                                                {' - '}
                                                <Text id="sort_code_2" field="sort_code_2" maxlength="2" onChange={(e)=> this.onChange('your_finances_form', e)} onBlur={(e)=> this.onBlur('your_finances_form', e)} validation={your_finances_form.sort_code_2} />
                                                {' - '}
                                                <Text id="sort_code_3" field="sort_code_3" maxlength="2" onChange={(e)=> this.onChange('your_finances_form', e)} onBlur={(e)=> this.onBlur('your_finances_form', e)} validation={your_finances_form.sort_code_3} />
                                            </ButtonGroup>
                                        </FormGroup>
                                        <p>How long have you had this account?</p>
                                        <FormGroup>
                                            <ButtonGroup>
                                                <DropDown id="account_month" field="account_month" onChange={(e)=> this.onChange('your_finances_form', e)} onBlur={(e)=> this.onBlur('your_finances_form', e)} validation={your_finances_form.account_month}>
                                                    <option value="">Month</option>
                                                    <option value="1">1</option>
                                                    
                                                </DropDown>
                                                {' '}
                                                <DropDown id="account_year" field="account_year" onChange={(e)=> this.onChange('your_finances_form', e)} onBlur={(e)=> this.onBlur('your_finances_form', e)} validation={your_finances_form.account_year}>
                                                    <option value="">Year</option>
                                                    <option value="1">1</option>
                                                    
                                                </DropDown>
                                            </ButtonGroup>
                                        </FormGroup>
                                        <h2>Consider paying by Direct Debit</h2>
                                        <ol>
                                            <li>Cuts out the risk of bank charges for late payments.</li>
                                            <li>Saves time having to make manual payments online or by post each time.</li>
                                            <li>Reduces the possibility of forgetting to pay.</li>
                                            <li>It is the only payment method with a money-back guarantee.</li>
                                        </ol>
                                        <p>Would you like to pay your monthly statements by Direct Debit?</p>
                                        <FormGroup>
                                            <Button 
                                                id="your_finances_form_yes" 
                                                type="button" 
                                                outline
                                                color="primary"
                                                onClick={()=> this.togglePayingByDebit('yes')}
                                            >
                                                Yes
                                            </Button>
                                            {' '}
                                            <Button 
                                                id="your_finances_form_no" 
                                                type="button"
                                                color="primary"
                                                onClick={()=> this.togglePayingByDebit('no')}
                                            >
                                                No
                                            </Button>
                                            {' '}
                                        </FormGroup>
                                        <Collapse isOpen={this.state.paying_by_debit}>
                                            <p>How much would you like to pay?</p>
                                            <FormGroup>
                                                <RadioGroup validation={direct_debit_form.pay_amount}>
                                                    <Radio 
                                                        validation={direct_debit_form.pay_amount} 
                                                        label={"Minimum amount"} 
                                                        id="pay_minimum"
                                                        onChange={(e)=> this.onChange('direct_debit_form', e)} 
                                                        onBlur={(e)=> this.onBlur('direct_debit_form', e)} 
                                                        onClick={(e)=> this.onChange('direct_debit_form', e)} 
                                                        value="minimum" 
                                                        field='pay_amount' 
                                                    />
                                                    <Radio 
                                                        validation={direct_debit_form.pay_amount} 
                                                        label={"Full balance"} 
                                                        id="pay_full" 
                                                        onChange={(e)=> this.onChange('direct_debit_form', e)} 
                                                        onBlur={(e)=> this.onBlur('direct_debit_form', e)} 
                                                        onClick={(e)=> this.onChange('direct_debit_form', e)} 
                                                        value="full" 
                                                        field='pay_amount' 
                                                    />
                                                </RadioGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <Check label="I confirm that I am the owner of the above account and agree to our Terms and Conditions." id="owner_agree_terms" field='owner_agree_terms' onChange={(e)=> this.onChange('direct_debit_form', e)} onBlur={(e)=> this.onBlur('direct_debit_form', e)} validation={direct_debit_form.owner_agree_terms} />
                                            </FormGroup>
                                        </Collapse>
                                        <h2>Employment details</h2>
                                        <FormGroup>
                                            <DropDown subLabel="Employment status" id="employment_status" field="employment_status" onChange={(e)=> this.onChange('your_finances_form', e)} onBlur={(e)=> this.onBlur('your_finances_form', e)} validation={your_finances_form.employment_status}>
                                                <option value="">(select one)</option>
                                                <option value="Full-time employed">Full-time employed</option>
                                                <option value="Part-time employed">Part-time employed</option>
                                                <option value="Self-employed">Self-employed</option>
                                                <option value="Unemployed">Unemployed</option>
                                                <option value="Temporary">Temporary</option>
                                                <option value="Home maker">Home maker</option>
                                                <option value="Retired">Retired</option>
                                                <option value="Student">Student</option>
                                                <option value="Other">Other</option>                                                 
                                                </DropDown>
                                        </FormGroup>
                                        <Collapse isOpen={this.state.employer_details}>
                                            <h2>Employer details</h2>
                                            <FormGroup>
                                                <Text subLabel="Employer's name" id="employer_name" field="employer_name" onChange={(e)=> this.onChange('employer_details_form', e)} onBlur={(e)=> this.onBlur('employer_details_form', e)} validation={employer_details_form.employer_name} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Text subLabel="Building number (if applicable)" id="building_number" field="building_number" onChange={(e)=> this.onChange('employer_details_form', e)} onBlur={(e)=> this.onBlur('employer_details_form', e)} validation={employer_details_form.building_number} />
                                            </FormGroup>
                                            <p>and / or</p>
                                            <FormGroup>
                                                <Text subLabel="Building name (if applicable)" id="building_name" field="building_name" onChange={(e)=> this.onChange('employer_details_form', e)} onBlur={(e)=> this.onBlur('employer_details_form', e)} validation={employer_details_form.building_name} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Text subLabel="Postcode" id="employer_postcode" field="employer_postcode" onChange={(e)=> this.onChange('employer_details_form', e)} onBlur={(e)=> this.onBlur('employer_details_form', e)} validation={employer_details_form.employer_postcode} />
                                            </FormGroup>
                                        </Collapse>
                                        <Collapse isOpen={this.state.income_and_outgoings}>
                                            <h2>Income and outgoings</h2>
                                            <FormGroup>
                                                <p>Your gross annual income (£)</p>
                                                <p><small>Basic salary before tax (excluding bonuses / overtime), pensions, investments</small></p>
                                                <Text  id="annual_income" field="annual_income" onChange={(e)=> this.onChange('income_and_outgoings_form', e)} onBlur={(e)=> this.onBlur('income_and_outgoings_form', e)} validation={income_and_outgoings_form.annual_income} />
                                            </FormGroup>
                                            <FormGroup>
                                                <p>Your partner's gross annual income (£) (optional)</p>
                                                <p><small>Before tax</small></p>
                                                <Text  id="partner_annual_income" field="partner_annual_income" onChange={(e)=> this.onChange('income_and_outgoings_form', e)} onBlur={(e)=> this.onBlur('income_and_outgoings_form', e)} validation={income_and_outgoings_form.partner_annual_income} />
                                            </FormGroup>
                                            <FormGroup>
                                                <p>Your monthly outgoings (£)</p>
                                                <p><small>All your living costs</small></p>
                                                <Text  id="monthly_outgoings" field="monthly_outgoings" onChange={(e)=> this.onChange('income_and_outgoings_form', e)} onBlur={(e)=> this.onBlur('income_and_outgoings_form', e)} validation={income_and_outgoings_form.monthly_outgoings} />
                                            </FormGroup>
                                        </Collapse>

                                        <FormGroup>
                                            <Button 
                                                id="your_finances_continue" 
                                                type="button" 
                                                color="primary"
                                                onClick={()=> this.continue('your_finances_form', 'submit')}
                                            >
                                                Continue
                                            </Button>
                                            {' '}
                                            <Button 
                                                id="your_finances_save" 
                                                type="button"
                                                outline
                                                color="primary"
                                                onClick={()=> this.continue('your_finances_form', 'save')}
                                            >
                                                Save for later
                                            </Button>
                                            {' '}
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Collapse>
                </div>
                {/* optional benefits */}
                <div>
                    <Row>
                        <Col>
                            <h2>5. Optional benefits and keeping in touch</h2>
                        </Col>
                        <Col>
                            <Collapse isOpen={!this.state.optional_benefits}>
                                <Button  
                                    onClick={()=> this.toggle('optional_benefits_form')} 
                                    color="link"
                                    className="float-right"
                                >
                                Edit <FaPencilAlt />
                                </Button>
                            </Collapse>
                        </Col>
                    </Row>
                    <Collapse isOpen={!this.state.optional_benefits}>
                        <p>Field 1 value: {optional_benefits_form.transfer.value}</p>
                        <p>Field 2 value: {optional_benefits_form.another_holder.value}</p>
                        <p>Field 3 value: {optional_benefits_form.keep_touch.value}</p>
                    </Collapse>
                    <Collapse isOpen={this.state.optional_benefits}>
                        <h2>Optional card benefits</h2>
                        <p>You can select optional card benefits in this section.</p>
                        <p>Would you like to transfer a balance?</p>
                        <div>
                            <Form>
                                <Row>
                                    <Col sm={12} lg={6}>
                                        <FormGroup>
                                            <p>Would you like to transfer a balance?</p>
                                            <RadioGroup validation={optional_benefits_form.transfer}>
                                                <Radio validation={optional_benefits_form.transfer} label={"Yes"} id="transfer_yes" onChange={(e)=> this.onChange('optional_benefits_form', e)} onBlur={(e)=> this.onBlur('optional_benefits_form', e)} onClick={(e)=> this.onChange('optional_benefits_form', e)} value="yes" field='transfer' />
                                                <Radio validation={optional_benefits_form.transfer} label={"No"} id="transfer_no" onChange={(e)=> this.onChange('optional_benefits_form', e)} onBlur={(e)=> this.onBlur('optional_benefits_form', e)} onClick={(e)=> this.onChange('optional_benefits_form', e)} value="no" field='transfer' />
                                            </RadioGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <p>Would you like to add another cardholder?</p>
                                            <RadioGroup validation={optional_benefits_form.another_holder}>
                                                <Radio validation={optional_benefits_form.another_holder} label={"Yes"} id="another_holder_yes" onChange={(e)=> this.onChange('optional_benefits_form', e)} onBlur={(e)=> this.onBlur('optional_benefits_form', e)} onClick={(e)=> this.onChange('optional_benefits_form', e)} value="yes" field='another_holder' />
                                                <Radio validation={optional_benefits_form.another_holder} label={"No"} id="another_holder_no" onChange={(e)=> this.onChange('optional_benefits_form', e)} onBlur={(e)=> this.onBlur('optional_benefits_form', e)} onClick={(e)=> this.onChange('optional_benefits_form', e)} value="no" field='another_holder' />
                                            </RadioGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <p>Keeping in touch</p>
                                            <RadioGroup validation={optional_benefits_form.keep_touch}>
                                                <Radio validation={optional_benefits_form.keep_touch} label={"Yes"} id="keep_touch_yes" onChange={(e)=> this.onChange('optional_benefits_form', e)} onBlur={(e)=> this.onBlur('optional_benefits_form', e)} onClick={(e)=> this.onChange('optional_benefits_form', e)} value="yes" field='keep_touch' />
                                                <Radio validation={optional_benefits_form.keep_touch} label={"No"} id="keep_touch_no" onChange={(e)=> this.onChange('optional_benefits_form', e)} onBlur={(e)=> this.onBlur('optional_benefits_form', e)} onClick={(e)=> this.onChange('optional_benefits_form', e)} value="no" field='keep_touch' />
                                            </RadioGroup>
                                        </FormGroup>
                                        <p>You must be a UK resident to apply for a card</p>
                                        <FormGroup>
                                            <Check label="Send a copy of this application by email" id="send_by_email" field='send_by_email' onChange={(e)=> this.onChange('optional_benefits_form', e)} onBlur={(e)=> this.onBlur('optional_benefits_form', e)} validation={optional_benefits_form.send_by_email} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Button 
                                                id="optional_benefits_continue" 
                                                type="button" 
                                                color="primary"
                                                onClick={()=> this.continue('optional_benefits_form', 'submit')}
                                            >
                                                Continue
                                            </Button>
                                            {' '}
                                            <Button 
                                                id="optional_benefits_save" 
                                                type="button"
                                                outline
                                                color="primary"
                                                onClick={()=> this.continue('optional_benefits_form', 'save')}
                                            >
                                                Save for later
                                            </Button>
                                            {' '}
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Collapse>
                </div>
                {/* review and submit */}
                <div>
                    <Collapse isOpen={this.state.section_five}>
                        <a onClick={()=> this.toggle('section_five')}>
                            <div>
                                <h2>6. Review and submit</h2>
                                <p>
                                    Please make sure you review information you have entered above and edit any of the sections as appropriate. 
                                    <br />
                                    When you are sure that the information you have entered is correct, you can submit your application.
                                    <br />
                                    You can also save your information and submit it at a later time. Please note that your application will not be reviewed until you have fully submitted it.
                                </p>
                            </div>
                        </a>
                        <div>
                            <Form>
                                <Row>
                                    <Col sm={12} lg={6}>
                                        <FormGroup>
                                            <Button 
                                                id="form-submit" 
                                                type="button" 
                                                color="primary"
                                                onClick={()=> this.submitAll('submit')}
                                            >
                                                Submit
                                            </Button>
                                            {' '}
                                            <Button 
                                                id="form-save" 
                                                type="button"
                                                outline
                                                color="primary"
                                                onClick={()=> this.submitAll('save')}
                                            >
                                                Save for later
                                            </Button>
                                            {' '}
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default CreditCard
