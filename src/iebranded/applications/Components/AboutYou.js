import React from "react";
import { Row, Col, Form, FormGroup, ButtonGroup, Collapse } from "reactstrap";
import { Form as FormUpdater, Validate } from "@myie/interact";
import { Text, DropDown, Check } from "@myie/interact-dom";

import { FORM_TITLE } from "../Constents/common";
import SectionHeader from "./SectionHeader";
import SaveButtons from "./SaveButtons";

class AboutYou extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about_you: true,
      about_you_form: {
        title: {
          rules: {
            required: { message: "Please tell us your title" }
          }
        },
        first_name: {
          rules: {
            required: { message: "Please enter your first name" }
          }
        },
        middle_name: {
          rules: {}
        },
        last_name: {
          rules: {
            required: { message: "Please enter your last name" }
          }
        },
        previous_name: {
          rules: {}
        },
        gender: {
          rules: {
            required: { message: "Please tell us your gender" }
          }
        },
        b_day: {
          rules: {
            required: { message: "Please tell us your date of birth" }
          }
        },
        b_month: {
          rules: {
            required: { message: "Please tell us your date of birth" }
          }
        },
        b_year: {
          rules: {
            required: { message: "Please tell us your date of birth" }
          }
        },
        marital_status: {
          rules: {
            required: { message: "Please tell us your marital status" }
          }
        },
        nationality: {
          rules: {
            required: { message: "Please tell us your nationality" }
          }
        },
        resident: {
          rules: {
            required: { message: "Please confirm that you are a UK resident" }
          }
        },
        mobile: {
          rules: {
            required: { message: "Please enter your mobile phone number" },
            format: {
              regex: /^(?:\+|0)\s*(\d[\s-]*){1,14}\s*$/,
              message:
                "You have entered an invalid mobile phone number. Please try again"
            }
          }
        },
        other_phone: {
          rules: {}
        },
        email: {
          rules: {
            required: { message: "Please enter your email address" },
            format: {
              regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
              message: "Please check your email address"
            }
          }
        },
        email_confirm: {
          rules: {
            required: { message: "Email addresses do not match" }
          }
        }
      }
    };
  }

  toggle = () => {
    this.setState({ ...this.state, about_you: !this.state.about_you });
  };

  onChange = e => {
    const about_you_form = FormUpdater.update(
      this.state.about_you_form,
      e.target
    );
    this.setState({ ...this.state, about_you_form });
  };

  onBlur = e => {
    const about_you_form = FormUpdater.update(
      this.state.about_you_form,
      e.target,
      true
    );
    this.setState({ ...this.state, about_you_form });
    return;
  };

  // To do: remove formTitle
  continue = (formTitle, submitSave) => {
    const about_you_form = Validate.form(this.state.about_you_form);
    this.setState({ ...this.state, about_you_form });

    if (submitSave === "save") {
      this.toggle();
      this.props.showAddressDetails(FORM_TITLE.address_details_form);
      console.log(" AboutYou save.", about_you_form);
    } else if (submitSave === "submit" && about_you_form.approved) {
      this.toggle();
      console.log(" AboutYou submit.", about_you_form);
    } else {
      console.log(" AboutYou invalid!", about_you_form);
    }
  };

  render() {
    const { about_you_form } = this.state;
    return (
      <div>
        <SectionHeader
          title={"2. About you"}
          isOpen={!this.state.about_you && about_you_form.title.value}
          onClick={() => this.toggle()}
        />
        <Collapse isOpen={!this.state.about_you}>
          <Row>
            <Col>
              <p>
                {about_you_form.title.value} {about_you_form.first_name.value}{" "}
                {about_you_form.middle_name.value}{" "}
                {about_you_form.last_name.value}
              </p>
              <p>{about_you_form.previous_name.value}</p>
              <p>{about_you_form.gender.value}</p>
              <p>
                {about_you_form.b_day.value} {about_you_form.b_month.value}{" "}
                {about_you_form.b_year.value}
              </p>
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
                    <DropDown
                      subLabel="Title"
                      id="title"
                      field="title"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.title}
                    >
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
                    <Text
                      subLabel="First name"
                      id="first_name"
                      field="first_name"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.first_name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Text
                      subLabel="Middle name (optional)"
                      id="middle_name"
                      field="middle_name"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.middle_name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Text
                      subLabel="Last name"
                      id="last_name"
                      field="last_name"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.last_name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Text
                      subLabel="Any previous name (optional)"
                      id="previous_name"
                      field="previous_name"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.previous_name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <DropDown
                      subLabel="Gender"
                      id="gender"
                      field="gender"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.gender}
                    >
                      <option value="">(Select one)</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </DropDown>
                  </FormGroup>
                  <FormGroup>
                    <ButtonGroup>
                      <DropDown
                        id="b_day"
                        field="b_day"
                        onChange={e => this.onChange(e)}
                        onBlur={e => this.onBlur(e)}
                        validation={about_you_form.b_day}
                      >
                        <option value="">Day</option>
                        <option value="1">1</option>
                      </DropDown>{" "}
                      <DropDown
                        id="b_month"
                        field="b_month"
                        onChange={e => this.onChange(e)}
                        onBlur={e => this.onBlur(e)}
                        validation={about_you_form.b_month}
                      >
                        <option value="">Month</option>
                        <option value="1">1</option>
                      </DropDown>{" "}
                      <DropDown
                        id="b_year"
                        field="b_year"
                        onChange={e => this.onChange(e)}
                        onBlur={e => this.onBlur(e)}
                        validation={about_you_form.b_year}
                      >
                        <option value="">Year</option>
                        <option value="1">1</option>
                      </DropDown>
                    </ButtonGroup>
                  </FormGroup>
                  <FormGroup>
                    <DropDown
                      subLabel="Marital status"
                      id="marital_status"
                      field="marital_status"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.marital_status}
                    >
                      <option value="">(select one)</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Civil partnership">
                        Civil partnership
                      </option>
                    </DropDown>
                  </FormGroup>
                  <FormGroup>
                    <DropDown
                      subLabel="Your nationality"
                      id="nationality"
                      field="nationality"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.nationality}
                    >
                      <option value="">(select one)</option>
                      <option value="British">British</option>
                      <option value="Non British">Non British</option>
                    </DropDown>
                  </FormGroup>
                  <p>You must be a UK resident to apply for a card</p>
                  <FormGroup>
                    <Check
                      label="I confirm that I am a UK resident"
                      id="resident"
                      field="resident"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.resident}
                    />
                  </FormGroup>
                  <h3>Contact details</h3>
                  <p>Now enter your contact information.</p>
                  <FormGroup>
                    <Text
                      subLabel="Mobile number"
                      id="mobile"
                      field="mobile"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.mobile}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Text
                      subLabel="Other phone number (optional)"
                      id="other_phone"
                      field="other_phone"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.other_phone}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Text
                      subLabel="Email address"
                      id="email"
                      field="email"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Text
                      subLabel="Confirm your email address"
                      id="email_confirm"
                      field="email_confirm"
                      onChange={e => this.onChange(e)}
                      onBlur={e => this.onBlur(e)}
                      validation={about_you_form.email_confirm}
                    />
                  </FormGroup>
                  <p>
                    <strong>
                      We will use your email address to send you emails to send
                      you information about your application and account, and to
                      notify you when your online statement is ready to view.
                    </strong>
                  </p>
                  <SaveButtons
                    formTitle={FORM_TITLE.about_you_form} // To do: remove this prop
                    saveForm={this.continue}
                  />
                </Col>
              </Row>
            </Form>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default AboutYou;
