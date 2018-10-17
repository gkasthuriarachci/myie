import React from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  ButtonGroup,
  Collapse
} from "reactstrap";
import { Form as FormUpdater, Validate } from "@myie/interact";
import { Text, DropDown, Check, Radio, RadioGroup } from "@myie/interact-dom";

import { FORM_TITLE } from "../Constents/common";
import SectionHeader from "./SectionHeader";
import SaveButtons from "./SaveButtons";
import AddressForm from "./AddressForm";

class Finances extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      your_finances: false,
      paying_by_debit: false,
      income_and_outgoings: false,
      employer_details: false,
      employer_manual_address: false,
      employer_select_address: false,
      employer_residential_status: false,
      employer_noAddressSelected: false,

      your_finances_form: {
        account_number: {
          rules: {
            required: { message: "Please enter your account number" },
            format: {
              regex: /^[0-9]{8}\s*$/,
              message: "Please check your account number"
            }
          }
        },
        sort_code_1: {
          rules: {
            required: { message: "Please enter your sort code" }
          }
        },
        sort_code_2: {
          rules: {
            required: { message: "Please enter your sort code" }
          }
        },
        sort_code_3: {
          rules: {
            required: { message: "Please enter your sort code" }
          }
        },
        account_month: {
          rules: {
            required: {
              message: "Please tell us how long you’ve had this account"
            }
          }
        },
        account_year: {
          rules: {
            required: {
              message: "Please tell us how long you’ve had this account"
            }
          }
        },
        employment_status: {
          rules: {
            required: { message: "Please tell us your employment status" }
          }
        }
      },

      direct_debit_form: {
        pay_amount: {
          rules: {}
        },
        owner_agree_terms: {
          rules: {
            required: { message: "Please confirm the Direct Debit instruction" }
          }
        }
      },

      employer_details_form: {
        employer_name: {
          rules: {
            required: { message: "Please enter your employer name" }
          }
        },
        building_number: {
          rules: {}
        },
        building_name: {
          rules: {}
        },
        employer_postcode: {
          rules: {
            required: { message: "Please enter your postcode" },
            format: {
              regex: /^[a-zA-Z0-9]{8}$/,
              message:
                "Please enter your postcode in a valid UK postcode format"
            }
          }
        }
      },

      employer_address_details_form: {
        house_number: {
          rules: {}
        },
        house_name: {
          rules: {}
        },
        postcode: {
          rules: {
            required: { message: "Please enter your postcode" },
            format: {
              regex: /^[a-zA-Z0-9]{8}$/,
              message:
                "Please enter your postcode in a valid UK postcode format"
            }
          }
        }
      },

      employer_custom_address_details_form: {
        flat_number: {
          rules: {}
        },
        street: {
          rules: {
            required: { message: "Please enter the street name" }
          }
        },
        district: {
          rules: {}
        },
        city: {
          rules: {
            required: { message: "Please enter your town or city" }
          }
        },
        county: {
          rules: {}
        }
      },

      employer_residential_address_details_form: {
        residential_status: {
          rules: {
            required: { message: "Please tell us your residential status" }
          }
        },
        living_month: {
          rules: {
            required: {
              message: "Please select the date when you started living there"
            }
          }
        },
        living_year: {
          rules: {
            required: {
              message: "Please select the date when you started living there"
            }
          }
        }
      },

      employer_select_address_details_form: {
        select_address: {
          rules: {}
        }
      },

      income_and_outgoings_form: {
        annual_income: {
          rules: {
            required: { message: "Please enter your gross annual income" },
            format: {
              regex: /^\s*£?\s*\d{1,3}(?:(?:,|\s)?\d{3})*(?:\.\d{2})?\s*$/,
              message: "Please enter a valid amount"
            }
          }
        },
        partner_annual_income: {
          rules: {}
        },
        monthly_outgoings: {
          rules: {
            required: { message: "Please enter your monthly outgoings" },
            format: {
              regex: /^\s*£?\s*\d{1,3}(?:(?:,|\s)?\d{3})*(?:\.\d{2})?\s*$/,
              message: "Please enter a valid amount"
            }
          }
        }
      }
    };
  }

  toggle = () => {
    this.setState({ ...this.state, your_finances: !this.state.your_finances });
  };

  employerManualAddress = () => {
    const employer_manual_address = true;
    const employer_select_address = false;
    const employer_residential_status = true;
    this.setState({
      ...this.state,
      employer_manual_address,
      employer_select_address,
      employer_residential_status
    });
  };

  employerSearchForAddress = () => {
    const employer_manual_address = false;
    const employer_select_address = false;
    const employer_residential_status = false;
    this.setState({
      ...this.state,
      employer_manual_address,
      employer_select_address,
      employer_residential_status
    });
  };

  employerFindAddress = () => {
    const employer_address_details_form = Validate.form(
      this.state.employer_address_details_form
    );
    this.setState({ ...this.state, employer_address_details_form });

    if (employer_address_details_form.approved) {
      const employer_manual_address = false;
      const employer_select_address = true;
      const employer_noAddressSelected = false;
      this.setState({
        ...this.state,
        employer_manual_address,
        employer_select_address,
        employer_noAddressSelected
      });
    } else {
      const employer_noAddressSelected = true;
      this.setState({ ...this.state, employer_noAddressSelected });
    }
  };

  togglePayingByDebit = status => {
    if (status === "yes") {
      this.setState({ ...this.state, paying_by_debit: true });
    } else {
      this.setState({ ...this.state, paying_by_debit: false });
    }
  };

  onEmployentStatus = value => {
    let income_and_outgoings = false;
    let employer_details = false;
    if (value === "") {
      income_and_outgoings = false;
      employer_details = false;
    } else if (value === "Full-time employed") {
      employer_details = true;
      income_and_outgoings = false;
    } else {
      employer_details = false;
      income_and_outgoings = true;
    }

    this.setState({
      ...this.state,
      income_and_outgoings: income_and_outgoings,
      employer_details: employer_details
    });
  };

  onChange = (selected_form, e) => {
    switch (selected_form) {
      case FORM_TITLE.your_finances_form:
        let income_and_outgoings = false;
        let employer_details = false;
        if (e.target.id === "employment_status") {
          const value = e.target.value;

          if (
            value === "Full-time employed" ||
            value === "Part-time employed" ||
            value === "Self-employed"
          ) {
            employer_details = true;
            income_and_outgoings = true;
          } else if (value !== "") {
            income_and_outgoings = true;
            employer_details = false;
          } else {
            employer_details = false;
            income_and_outgoings = false;
          }
        }

        const your_finances_form = FormUpdater.update(
          this.state.your_finances_form,
          e.target
        );
        this.setState({
          ...this.state,
          your_finances_form,
          income_and_outgoings,
          employer_details
        });
        return;
      case FORM_TITLE.direct_debit_form:
        const direct_debit_form = FormUpdater.update(
          this.state.direct_debit_form,
          e.target
        );
        this.setState({ ...this.state, direct_debit_form });
        return;
      case FORM_TITLE.employer_details_form:
        const employer_details_form = FormUpdater.update(
          this.state.employer_details_form,
          e.target
        );
        this.setState({ ...this.state, employer_details_form });
        return;

      case FORM_TITLE.employer_address_details_form:
        const employer_address_details_form = FormUpdater.update(
          this.state.employer_address_details_form,
          e.target
        );
        this.setState({ ...this.state, employer_address_details_form });
        return;
      case FORM_TITLE.employer_custom_address_details_form:
        const employer_custom_address_details_form = FormUpdater.update(
          this.state.employer_custom_address_details_form,
          e.target
        );
        this.setState({ ...this.state, employer_custom_address_details_form });
        return;
      case FORM_TITLE.employer_residential_address_details_form:
        const employer_residential_address_details_form = FormUpdater.update(
          this.state.employer_residential_address_details_form,
          e.target
        );
        this.setState({
          ...this.state,
          employer_residential_address_details_form
        });
        return;
      case FORM_TITLE.employer_select_address_details_form:
        const employer_select_address_details_form = FormUpdater.update(
          this.state.employer_select_address_details_form,
          e.target
        );
        this.setState({ ...this.state, employer_select_address_details_form });
        return;

      case FORM_TITLE.income_and_outgoings_form:
        const income_and_outgoings_form = FormUpdater.update(
          this.state.income_and_outgoings_form,
          e.target
        );
        this.setState({ ...this.state, income_and_outgoings_form });
        return;
    }
  };

  onBlur = (selected_form, e) => {
    switch (selected_form) {
      case FORM_TITLE.your_finances_form:
        const your_finances_form = FormUpdater.update(
          this.state.your_finances_form,
          e.target,
          true
        );
        this.setState({ ...this.state, your_finances_form });
        return;
      case FORM_TITLE.direct_debit_form:
        const direct_debit_form = FormUpdater.update(
          this.state.direct_debit_form,
          e.target,
          true
        );
        this.setState({ ...this.state, direct_debit_form });
        return;
      case FORM_TITLE.employer_details_form:
        const employer_details_form = FormUpdater.update(
          this.state.employer_details_form,
          e.target,
          true
        );
        this.setState({ ...this.state, employer_details_form });
        return;

      case FORM_TITLE.employer_address_details_form:
        const employer_address_details_form = FormUpdater.update(
          this.state.employer_address_details_form,
          e.target,
          true
        );
        this.setState({ ...this.state, employer_address_details_form });
        return;
      case FORM_TITLE.employer_custom_address_details_form:
        const employer_custom_address_details_form = FormUpdater.update(
          this.state.employer_custom_address_details_form,
          e.target,
          true
        );
        this.setState({ ...this.state, employer_custom_address_details_form });
        return;
      case FORM_TITLE.employer_residential_address_details_form:
        const employer_residential_address_details_form = FormUpdater.update(
          this.state.employer_residential_address_details_form,
          e.target,
          true
        );
        this.setState({
          ...this.state,
          employer_residential_address_details_form
        });
        return;
      case FORM_TITLE.employer_select_address_details_form:
        const employer_select_address_details_form = FormUpdater.update(
          this.state.employer_select_address_details_form,
          e.target,
          true
        );
        this.setState({ ...this.state, employer_select_address_details_form });
        return;

      case FORM_TITLE.income_and_outgoings_form:
        const income_and_outgoings_form = FormUpdater.update(
          this.state.income_and_outgoings_form,
          e.target,
          true
        );
        this.setState({ ...this.state, income_and_outgoings_form });
        return;
    }
  };

  // To do: remove formTitle
  continue = (formTitle, submitSave) => {
    const your_finances_form = Validate.form(this.state.your_finances_form);
    this.setState({ ...this.state, your_finances_form });

    if (submitSave === "save") {
      this.toggle();
      console.log(" AboutYou save.", your_finances_form);
    } else if (submitSave === "submit" && your_finances_form.approved) {
      this.toggle();
      console.log(" AboutYou submit.", your_finances_form);
    } else {
      console.log(" AboutYou invalid!", your_finances_form);
    }
  };

  render() {
    const {
      your_finances_form,
      direct_debit_form,
      employer_details_form,
      employer_address_details_form,
      employer_custom_address_details_form,
      employer_residential_address_details_form,
      employer_select_address_details_form,
      income_and_outgoings_form
    } = this.state;
    return (
      <div>
        <SectionHeader
          title={"4. Your finances"}
          isOpen={!this.state.your_finances}
          onClick={() => this.toggle(FORM_TITLE.your_finances_form)}
        />
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
                    <Text
                      subLabel="Account number"
                      id="account_number"
                      field="account_number"
                      onChange={e =>
                        this.onChange(FORM_TITLE.your_finances_form, e)
                      }
                      onBlur={e =>
                        this.onBlur(FORM_TITLE.your_finances_form, e)
                      }
                      validation={your_finances_form.account_number}
                    />
                  </FormGroup>
                  <p>
                    Account not in your name?{" "}
                    <a>Download Direct Debit instruction form</a>
                  </p>
                  <FormGroup>
                    <p>Sort code</p>
                    <ButtonGroup>
                      <Text
                        id="sort_code_1"
                        field="sort_code_1"
                        maxlength="2"
                        onChange={e =>
                          this.onChange(FORM_TITLE.your_finances_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.your_finances_form, e)
                        }
                        validation={your_finances_form.sort_code_1}
                      />
                      {" - "}
                      <Text
                        id="sort_code_2"
                        field="sort_code_2"
                        maxlength="2"
                        onChange={e =>
                          this.onChange(FORM_TITLE.your_finances_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.your_finances_form, e)
                        }
                        validation={your_finances_form.sort_code_2}
                      />
                      {" - "}
                      <Text
                        id="sort_code_3"
                        field="sort_code_3"
                        maxlength="2"
                        onChange={e =>
                          this.onChange(FORM_TITLE.your_finances_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.your_finances_form, e)
                        }
                        validation={your_finances_form.sort_code_3}
                      />
                    </ButtonGroup>
                  </FormGroup>
                  <p>How long have you had this account?</p>
                  <FormGroup>
                    <ButtonGroup>
                      <DropDown
                        id="account_month"
                        field="account_month"
                        onChange={e =>
                          this.onChange(FORM_TITLE.your_finances_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.your_finances_form, e)
                        }
                        validation={your_finances_form.account_month}
                      >
                        <option value="">Month</option>
                        <option value="1">1</option>
                      </DropDown>{" "}
                      <DropDown
                        id="account_year"
                        field="account_year"
                        onChange={e =>
                          this.onChange(FORM_TITLE.your_finances_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.your_finances_form, e)
                        }
                        validation={your_finances_form.account_year}
                      >
                        <option value="">Year</option>
                        <option value="1">1</option>
                      </DropDown>
                    </ButtonGroup>
                  </FormGroup>
                  <h2>Consider paying by Direct Debit</h2>
                  <ol>
                    <li>
                      Cuts out the risk of bank charges for late payments.
                    </li>
                    <li>
                      Saves time having to make manual payments online or by
                      post each time.
                    </li>
                    <li>Reduces the possibility of forgetting to pay.</li>
                    <li>
                      It is the only payment method with a money-back guarantee.
                    </li>
                  </ol>
                  <p>
                    Would you like to pay your monthly statements by Direct
                    Debit?
                  </p>
                  <FormGroup>
                    <Button
                      id="your_finances_form_yes"
                      type="button"
                      outline
                      color="primary"
                      onClick={() => this.togglePayingByDebit("yes")}
                    >
                      Yes
                    </Button>{" "}
                    <Button
                      id="your_finances_form_no"
                      type="button"
                      color="primary"
                      onClick={() => this.togglePayingByDebit("no")}
                    >
                      No
                    </Button>{" "}
                  </FormGroup>
                  <Collapse isOpen={this.state.paying_by_debit}>
                    <p>How much would you like to pay?</p>
                    <FormGroup>
                      <RadioGroup validation={direct_debit_form.pay_amount}>
                        <Radio
                          validation={direct_debit_form.pay_amount}
                          label={"Minimum amount"}
                          id="pay_minimum"
                          onChange={e =>
                            this.onChange(FORM_TITLE.direct_debit_form, e)
                          }
                          onBlur={e =>
                            this.onBlur(FORM_TITLE.direct_debit_form, e)
                          }
                          onClick={e =>
                            this.onChange(FORM_TITLE.direct_debit_form, e)
                          }
                          value="minimum"
                          field="pay_amount"
                        />
                        <Radio
                          validation={direct_debit_form.pay_amount}
                          label={"Full balance"}
                          id="pay_full"
                          onChange={e =>
                            this.onChange(FORM_TITLE.direct_debit_form, e)
                          }
                          onBlur={e =>
                            this.onBlur(FORM_TITLE.direct_debit_form, e)
                          }
                          onClick={e =>
                            this.onChange(FORM_TITLE.direct_debit_form, e)
                          }
                          value="full"
                          field="pay_amount"
                        />
                      </RadioGroup>
                    </FormGroup>
                    <FormGroup>
                      <Check
                        label="I confirm that I am the owner of the above account and agree to our Terms and Conditions."
                        id="owner_agree_terms"
                        field="owner_agree_terms"
                        onChange={e =>
                          this.onChange(FORM_TITLE.direct_debit_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.direct_debit_form, e)
                        }
                        validation={direct_debit_form.owner_agree_terms}
                      />
                    </FormGroup>
                  </Collapse>
                  <h2>Employment details</h2>
                  <FormGroup>
                    <DropDown
                      subLabel="Employment status"
                      id="employment_status"
                      field="employment_status"
                      onChange={e =>
                        this.onChange(FORM_TITLE.your_finances_form, e)
                      }
                      onBlur={e =>
                        this.onBlur(FORM_TITLE.your_finances_form, e)
                      }
                      validation={your_finances_form.employment_status}
                    >
                      <option value="">(select one)</option>
                      <option value="Full-time employed">
                        Full-time employed
                      </option>
                      <option value="Part-time employed">
                        Part-time employed
                      </option>
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
                    <AddressForm
                      manual_address={this.state.employer_manual_address}
                      select_address={this.state.employer_select_address}
                      residential_status={
                        this.state.employer_residential_status
                      }
                      address_details_form={employer_address_details_form}
                      custom_address_details_form={
                        employer_custom_address_details_form
                      }
                      residential_address_details_form={
                        employer_residential_address_details_form
                      }
                      select_address_details_form={
                        employer_select_address_details_form
                      }
                      fomrOne={FORM_TITLE.employer_address_details_form}
                      formTwo={FORM_TITLE.employer_custom_address_details_form}
                      fomrThree={
                        FORM_TITLE.employer_residential_address_details_form
                      }
                      formFour={FORM_TITLE.employer_select_address_details_form}
                      searchForAddress={this.employerSearchForAddress}
                      findAddress={this.employerFindAddress}
                      manualAddress={this.employerManualAddress}
                      onChange={this.onChange}
                      onBlur={this.onBlur}
                    />
                  </Collapse>
                  <Collapse isOpen={this.state.income_and_outgoings}>
                    <h2>Income and outgoings</h2>
                    <FormGroup>
                      <p>Your gross annual income (£)</p>
                      <p>
                        <small>
                          Basic salary before tax (excluding bonuses /
                          overtime), pensions, investments
                        </small>
                      </p>
                      <Text
                        id="annual_income"
                        field="annual_income"
                        onChange={e =>
                          this.onChange(FORM_TITLE.income_and_outgoings_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.income_and_outgoings_form, e)
                        }
                        validation={income_and_outgoings_form.annual_income}
                      />
                    </FormGroup>
                    <FormGroup>
                      <p>Your partner's gross annual income (£) (optional)</p>
                      <p>
                        <small>Before tax</small>
                      </p>
                      <Text
                        id="partner_annual_income"
                        field="partner_annual_income"
                        onChange={e =>
                          this.onChange(FORM_TITLE.income_and_outgoings_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.income_and_outgoings_form, e)
                        }
                        validation={
                          income_and_outgoings_form.partner_annual_income
                        }
                      />
                    </FormGroup>
                    <FormGroup>
                      <p>Your monthly outgoings (£)</p>
                      <p>
                        <small>All your living costs</small>
                      </p>
                      <Text
                        id="monthly_outgoings"
                        field="monthly_outgoings"
                        onChange={e =>
                          this.onChange(FORM_TITLE.income_and_outgoings_form, e)
                        }
                        onBlur={e =>
                          this.onBlur(FORM_TITLE.income_and_outgoings_form, e)
                        }
                        validation={income_and_outgoings_form.monthly_outgoings}
                      />
                    </FormGroup>
                  </Collapse>
                  <SaveButtons
                    formTitle={FORM_TITLE.your_finances_form}
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

export default Finances;
