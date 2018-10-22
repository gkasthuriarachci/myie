import React from "react";
import { Row, Col, Form, FormGroup, Button, Collapse } from "reactstrap";
import { Form as FormUpdater, Validate } from "@myie/interact";
import { DropDown, Check, Radio, RadioGroup } from "@myie/interact-dom";
import { toggle } from "../stateFunctions";
import { FORM_TITLE } from "../Constents/common";
import SectionHeader from "./SectionHeader";
import SaveButtons from "./SaveButtons";
import Transfer from "./Transfer";
import AboutHolder from "./AboutHolder";
import KeepingInTouch from "./KeepingInTouch";

class OptionalBenefits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      optional_benefits: false,
      transfer: false,
      number_of_transfers_1: false,
      number_of_transfers_2: false,
      another_cardholder: false,
      keeping_in_touch: false,

      optional_benefits_form: {
        transfer: {
          rules: {}
        },
        another_holder: {
          rules: {}
        },
        keep_touch: {
          rules: {}
        },
        send_by_email: {
          rules: {}
        }
      },

      number_of_transfers_form: {
        number_of_transfers: {
          rules: {
            required: { message: "Please tell us your residential status" }
          }
        }
      },

      transfer_balance_1_form: {
        card_number: {
          rules: {
            required: { message: "Please enter your card number" }
          }
        },
        transfer_amount_pounds: {},
        transfer_amount_pences: {},
        terms: {}
      },

      transfer_balance_2_form: {
        card_number: {
          rules: {
            required: { message: "Please enter your card number" }
          }
        },
        transfer_amount_pounds: {},
        transfer_amount_pences: {}
      },

      cardholder_form: {
        title: {
          rules: {
            required: {
              message: "Please enter the additional cardholder’s title"
            }
          }
        },
        first_name: {
          rules: {
            required: {
              message: "Please enter the additional cardholder’s first name"
            }
          }
        },
        middle_name: {
          rules: {}
        },
        last_name: {
          rules: {
            required: {
              message: "Please enter the additional cardholder’s last name"
            }
          }
        },
        gender: {
          rules: {
            required: {
              message: "Please tell us the additional cardholder’s gender"
            }
          }
        },
        b_day: {
          rules: {
            required: {
              message:
                "Please tell us the additional cardholder’s date of birth"
            }
          }
        },
        b_month: {
          rules: {
            required: {
              message:
                "Please tell us the additional cardholder’s date of birth"
            }
          }
        },
        b_year: {
          rules: {
            required: {
              message:
                "Please tell us the additional cardholder’s date of birth"
            }
          }
        },
        relationship: {
          rules: {
            required: {
              message:
                "Please tell us the additional cardholder’s relationship to you"
            }
          }
        },
        marital_status: {
          rules: {
            required: {
              message:
                "Please tell us the additional cardholder’s marital status"
            }
          }
        },
        nationality: {
          rules: {
            required: {
              message: "Please tell us the additional cardholder’s nationality"
            }
          }
        },
        mobile_number: {
          rules: {
            required: {
              message:
                "Please enter the additional cardholder’s mobile phone number"
            }
          }
        },
        other_phone: {
          rules: {}
        }
      },

      keeping_in_touch_form: {
        contact_method: {
          rules: {}
        },
        products_and_services: {
          rules: {}
        },
        selected_3rd_parties: {
          rules: {}
        }
      }
    };
  }

  toggle = () => {
    this.setState(toggle(this.state, "optional_benefits"));
  };

  onChange = (selected_form, e) => {
    switch (selected_form) {
      case FORM_TITLE.optional_benefits_form:
        const optional_benefits_form = FormUpdater.update(
          this.state.optional_benefits_form,
          e.target
        );
        let transfer = false;
        if (e.target.id === "transfer_yes") {
          transfer = true;
        }

        let keeping_in_touch = false;
        if (e.target.id === "keep_touch_yes") {
          keeping_in_touch = true;
        }

        let another_cardholder = false;
        if (e.target.id === "another_holder_yes") {
          another_cardholder = true;
        }

        this.setState({
          ...this.state,
          optional_benefits_form,
          transfer,
          keeping_in_touch,
          another_cardholder
        });
        return;
      case FORM_TITLE.number_of_transfers_form:
        const number_of_transfers_form = FormUpdater.update(
          this.state.number_of_transfers_form,
          e.target
        );
        let number_of_transfers_1,
          number_of_transfers_2 = false;
        if (e.target.id === "number_of_transfers" && e.target.value !== "") {
          number_of_transfers_1 = true;
          number_of_transfers_2 = e.target.value === "2" ? true : false;
        }
        this.setState({
          ...this.state,
          number_of_transfers_form,
          number_of_transfers_1,
          number_of_transfers_2
        });
        return;
      case FORM_TITLE.transfer_balance_1_form:
        const transfer_balance_1_form = FormUpdater.update(
          this.state.transfer_balance_1_form,
          e.target
        );
        this.setState({ ...this.state, transfer_balance_1_form });
        return;
      case FORM_TITLE.cardholder_form:
        const cardholder_form = FormUpdater.update(
          this.state.cardholder_form,
          e.target
        );
        this.setState({ ...this.state, cardholder_form });
        return;
      case FORM_TITLE.keeping_in_touch_form:
        const keeping_in_touch_form = FormUpdater.update(
          this.state.keeping_in_touch_form,
          e.target
        );
        this.setState({ ...this.state, keeping_in_touch_form });
        return;
    }
  };

  onBlur = (selected_form, e) => {
    switch (selected_form) {
      case FORM_TITLE.optional_benefits_form:
        const optional_benefits_form = FormUpdater.update(
          this.state.optional_benefits_form,
          e.target,
          true
        );
        let transfer = false;
        if (e.target.id === "transfer_yes") {
          transfer = true;
        }

        let keeping_in_touch = false;
        if (e.target.id === "keep_touch_yes") {
          keeping_in_touch = true;
        }

        let another_cardholder = false;
        if (e.target.id === "another_holder_yes") {
          another_cardholder = true;
        }

        this.setState({
          ...this.state,
          optional_benefits_form,
          transfer,
          keeping_in_touch,
          another_cardholder
        });
        return;
      case FORM_TITLE.number_of_transfers_form:
        const number_of_transfers_form = FormUpdater.update(
          this.state.number_of_transfers_form,
          e.target,
          true
        );
        let number_of_transfers_1,
          number_of_transfers_2 = false;
        if (e.target.id === "number_of_transfers" && e.target.value !== "") {
          number_of_transfers_1 = true;
          number_of_transfers_2 = e.target.value === "2" ? true : false;
        }
        this.setState({
          ...this.state,
          number_of_transfers_form,
          number_of_transfers_1,
          number_of_transfers_2
        });
        return;
      case FORM_TITLE.transfer_balance_1_form:
        const transfer_balance_1_form = FormUpdater.update(
          this.state.transfer_balance_1_form,
          e.target,
          true
        );
        this.setState({ ...this.state, transfer_balance_1_form });
        return;
      case FORM_TITLE.transfer_balance_2_form:
        const transfer_balance_2_form = FormUpdater.update(
          this.state.transfer_balance_2_form,
          e.target,
          true
        );
        this.setState({ ...this.state, transfer_balance_2_form });
        return;
      case FORM_TITLE.cardholder_form:
        const cardholder_form = FormUpdater.update(
          this.state.cardholder_form,
          e.target,
          true
        );
        this.setState({ ...this.state, cardholder_form });
        return;
      case FORM_TITLE.keeping_in_touch_form:
        const keeping_in_touch_form = FormUpdater.update(
          this.state.keeping_in_touch_form,
          e.target,
          true
        );
        this.setState({ ...this.state, keeping_in_touch_form });
        return;
    }
  };

  continue = (section, submitSave) => {
    let form = null;

    if (section === FORM_TITLE.optional_benefits_form) {
      const optional_benefits_form = Validate.form(
        this.state.optional_benefits_form
      );
      this.setState({ ...this.state, optional_benefits_form });
      form = optional_benefits_form;
    }

    if (submitSave === "save") {
      this.submitSection(section);
      console.log(section, " form save.", form);
    } else if (submitSave === "submit" && form.approved) {
      this.submitSection(section);
      console.log(section, " form submit.", form);
    } else {
      console.log(section, " form invalid!", form);
    }
  };

  render() {
    const {
      optional_benefits_form,
      number_of_transfers_form,
      transfer_balance_1_form,
      transfer_balance_2_form,
      cardholder_form,
      keeping_in_touch_form
    } = this.state;
    return (
      <div>
        <SectionHeader
          title={"5. Optional benefits and keeping in touch"}
          isOpen={!this.state.optional_benefits}
          onClick={() => this.toggle()}
        />
        <Collapse isOpen={!this.state.optional_benefits}>
          <p>{optional_benefits_form.transfer.value}</p>
          <p>{optional_benefits_form.another_holder.value}</p>
          <p>{optional_benefits_form.keep_touch.value}</p>
        </Collapse>
        <Collapse isOpen={this.state.optional_benefits}>
          <h2>Optional card benefits</h2>
          <p>You can select optional card benefits in this section.</p>
          <div>
            <Form>
              <Row>
                <Col sm={12} lg={6}>
                  <FormGroup>
                    <p>Would you like to transfer a balance?</p>
                    <RadioGroup validation={optional_benefits_form.transfer}>
                      <Radio
                        validation={optional_benefits_form.transfer}
                        label={"Yes"}
                        id="transfer_yes"
                        onChange={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.optional_benefits_form, e)
                        }
                        onClick={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        value="yes"
                        field="transfer"
                      />
                      <Radio
                        validation={optional_benefits_form.transfer}
                        label={"No"}
                        id="transfer_no"
                        onChange={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.optional_benefits_form, e)
                        }
                        onClick={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        value="no"
                        field="transfer"
                        defaultChecked
                      />
                    </RadioGroup>
                    <Collapse isOpen={this.state.transfer}>
                      <p>
                        <small>
                          Please tell us how many transfers you would like to do
                        </small>
                      </p>
                      <FormGroup>
                        <DropDown
                          subLabel="How many transfers would you like to do?"
                          id="number_of_transfers"
                          field="number_of_transfers"
                          onChange={e =>
                            this.onChange(
                              FORM_TITLE.number_of_transfers_form,
                              e
                            )
                          }
                          onBlur={e =>
                            this.onBlur(FORM_TITLE.number_of_transfers_form, e)
                          }
                          validation={
                            number_of_transfers_form.number_of_transfers
                          }
                        >
                          <option value="">(select one)</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                        </DropDown>
                      </FormGroup>
                      <Collapse isOpen={this.state.number_of_transfers_1}>
                        <Transfer
                          title={"Transfer 1"}
                          transferFrom={transfer_balance_1_form}
                          formTitle={FORM_TITLE.transfer_balance_1_form}
                          onChange={this.onChange}
                          onBlur={this.onBlur}
                        />
                      </Collapse>
                      <Collapse isOpen={this.state.number_of_transfers_2}>
                        <Transfer
                          title={"Transfer 2"}
                          transferFrom={transfer_balance_2_form}
                          formTitle={FORM_TITLE.transfer_balance_2_form}
                          onChange={this.onChange}
                          onBlur={this.onBlur}
                        />
                      </Collapse>
                      <p>Total amount: £</p>
                      <FormGroup>
                        <Check
                          label="I have read and understood the Balance Transfer Terms and Conditions"
                          id="terms"
                          field="terms"
                          onChange={e =>
                            this.onChange(FORM_TITLE.transfer_balance_1_form, e)
                          }
                          onBlur={e =>
                            this.onBlur(FORM_TITLE.transfer_balance_1_form, e)
                          }
                          validation={transfer_balance_1_form.terms}
                        />
                      </FormGroup>
                    </Collapse>
                  </FormGroup>
                  <FormGroup>
                    <p>Would you like to add another cardholder?</p>
                    <RadioGroup
                      validation={optional_benefits_form.another_holder}
                    >
                      <Radio
                        validation={optional_benefits_form.another_holder}
                        label={"Yes"}
                        id="another_holder_yes"
                        onChange={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.optional_benefits_form, e)
                        }
                        onClick={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        value="yes"
                        field="another_holder"
                      />
                      <Radio
                        validation={optional_benefits_form.another_holder}
                        label={"No"}
                        id="another_holder_no"
                        onChange={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.optional_benefits_form, e)
                        }
                        onClick={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        value="no"
                        field="another_holder"
                        defaultChecked
                      />
                    </RadioGroup>
                    <Collapse isOpen={this.state.another_cardholder}>
                      <AboutHolder
                        formTitle={FORM_TITLE.cardholder_form}
                        cardholder_form={cardholder_form}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                      />
                    </Collapse>
                  </FormGroup>
                  <FormGroup>
                    <p>Keeping in touch</p>
                    <RadioGroup validation={optional_benefits_form.keep_touch}>
                      <Radio
                        validation={optional_benefits_form.keep_touch}
                        label={"Yes"}
                        id="keep_touch_yes"
                        onChange={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.optional_benefits_form, e)
                        }
                        onClick={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        value="yes"
                        field="keep_touch"
                      />
                      <Radio
                        validation={optional_benefits_form.keep_touch}
                        label={"No"}
                        id="keep_touch_no"
                        onChange={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.optional_benefits_form, e)
                        }
                        onClick={e =>
                          this.onChange(FORM_TITLE.optional_benefits_form, e)
                        }
                        value="no"
                        field="keep_touch"
                        defaultChecked
                      />
                    </RadioGroup>
                    <Collapse isOpen={this.state.keeping_in_touch}>
                      <KeepingInTouch
                        keepTouchForm={keeping_in_touch_form}
                        formTitle={FORM_TITLE.keeping_in_touch_form}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                      />
                    </Collapse>
                  </FormGroup>
                  <p>You must be a UK resident to apply for a card</p>
                  <FormGroup>
                    <Check
                      label="Send a copy of this application by email"
                      id="send_by_email"
                      field="send_by_email"
                      onChange={e =>
                        this.onChange(FORM_TITLE.optional_benefits_form, e)
                      }
                      onBlur={e =>
                        this.onBlur(FORM_TITLE.optional_benefits_form, e)
                      }
                      validation={optional_benefits_form.send_by_email}
                    />
                  </FormGroup>
                  <SaveButtons
                    formTitle={FORM_TITLE.optional_benefits_form}
                    saveForm={this.continue}
                  />

                  <FormGroup>
                    <Button
                      id="optional_benefits_continue"
                      type="button"
                      color="primary"
                      onClick={() =>
                        this.continue(
                          FORM_TITLE.optional_benefits_form,
                          "submit"
                        )
                      }
                    >
                      Continue
                    </Button>{" "}
                    <Button
                      id="optional_benefits_save"
                      type="button"
                      outline
                      color="primary"
                      onClick={() =>
                        this.continue(FORM_TITLE.optional_benefits_form, "save")
                      }
                    >
                      Save for later
                    </Button>{" "}
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default OptionalBenefits;
