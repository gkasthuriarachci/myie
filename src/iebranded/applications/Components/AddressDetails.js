import React from "react";
import { Row, Col, Form, FormGroup, ButtonGroup, Collapse } from "reactstrap";
import { Form as FormUpdater, Validate } from "@myie/interact";
import { Radio, RadioGroup } from "@myie/interact-dom";

import { FORM_TITLE } from "../Constents/common";
import SectionHeader from "./SectionHeader";
import SaveButtons from "./SaveButtons";
import AddressForm from "./AddressForm";

class AddressDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address_details: true,
      address_details_form: {
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
        },
        correspondence_address: {
          rules: {}
        }
      },
      custom_address_details_form: {
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
      residential_address_details_form: {
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
      select_address_details_form: {
        select_address: {
          rules: {}
        }
      },
      correspondence_address_details_form: {
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
        },
        correspondence_address: {
          rules: {}
        }
      },

      correspondence_custom_address_details_form: {
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

      correspondence_residential_address_details_form: {
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

      correspondence_select_address_details_form: {
        select_address: {
          rules: {}
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
    const {
      address_details_form,
      custom_address_details_form,
      residential_address_details_form,
      select_address_details_form,
      correspondence_address_details_form,
      correspondence_custom_address_details_form,
      correspondence_residential_address_details_form,
      correspondence_select_address_details_form
    } = this.state;
    return (
      <div>
        <SectionHeader
          title={"3. Address details"}
          isOpen={
            !this.state.address_details && address_details_form.postcode.value
          }
          onClick={() => this.toggle(FORM_TITLE.address_details_form)}
        />
        <Collapse isOpen={!this.state.address_details}>
          <Row>
            <Col>
              <h4>Current address</h4>
              <p>Flat</p>
              <p>{custom_address_details_form.flat_number.value}</p>
              <p>{address_details_form.house_number.value}</p>
            </Col>
            <Col>
              <p>{address_details_form.house_name.value}</p>
              <p>{custom_address_details_form.street.value}</p>
              <p>{custom_address_details_form.city.value}</p>
              <p>{custom_address_details_form.county.value}</p>
              <p>{address_details_form.postcode.value}</p>
              <p>{residential_address_details_form.residential_status.value}</p>
              <p>
                {residential_address_details_form.living_month.value}{" "}
                {residential_address_details_form.living_year.value}
              </p>
            </Col>
          </Row>
        </Collapse>
        <Collapse isOpen={this.state.address_details}>
          <p>
            Please enter your address details. We support BFPO (British Forces
            Post Office) too, so if you are a member of the British armed forces
            please continue to complete this form.
          </p>
          <h2>Current address</h2>
          <Collapse isOpen={this.state.noAddressSelected}>
            <p>
              Please complete your postcode and use the buttons below to find
              your address or fill your address in manually.
            </p>
          </Collapse>
          <div>
            <Form>
              <Row>
                <Col sm={12} lg={6}>
                  <AddressForm
                    manual_address={this.state.manual_address}
                    select_address={this.state.select_address}
                    residential_status={this.state.residential_status}
                    address_details_form={address_details_form}
                    custom_address_details_form={custom_address_details_form}
                    residential_address_details_form={
                      residential_address_details_form
                    }
                    select_address_details_form={select_address_details_form}
                    fomrOne={FORM_TITLE.address_details_form}
                    formTwo={FORM_TITLE.custom_address_details_form}
                    fomrThree={FORM_TITLE.residential_address_details_form}
                    formFour={FORM_TITLE.select_address_details_form}
                    searchForAddress={this.searchForAddress}
                    findAddress={this.findAddress}
                    manualAddress={this.manualAddress}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                  />
                  <Collapse isOpen={this.state.correspondence_address}>
                    <h2>Correspondence address</h2>
                    <p>
                      We will use your current address for correspondence (e.g.
                      statements, updates).
                    </p>
                    <p>
                      Do you want to set up a separate correspondence address?
                    </p>
                    <FormGroup>
                      <RadioGroup
                        validation={address_details_form.correspondence_address}
                      >
                        <Radio
                          validation={
                            address_details_form.correspondence_address
                          }
                          label={"Yes"}
                          id="correspondence_address_yes"
                          onChange={e =>
                            this.onChange(FORM_TITLE.address_details_form, e)
                          }
                          onBlur={e =>
                            this.onBlur(FORM_TITLE.address_details_form, e)
                          }
                          onClick={e =>
                            this.onChange(FORM_TITLE.address_details_form, e)
                          }
                          value="yes"
                          field="correspondence_address"
                        />
                        <Radio
                          validation={
                            address_details_form.correspondence_address
                          }
                          label={"No"}
                          id="correspondence_address_no"
                          onChange={e =>
                            this.onChange(FORM_TITLE.address_details_form, e)
                          }
                          onBlur={e =>
                            this.onBlur(FORM_TITLE.address_details_form, e)
                          }
                          onClick={e =>
                            this.onChange(FORM_TITLE.address_details_form, e)
                          }
                          value="no"
                          field="correspondence_address"
                        />
                      </RadioGroup>
                    </FormGroup>
                  </Collapse>
                  <Collapse isOpen={this.state.show_correspondence_address}>
                    <AddressForm
                      manual_address={this.state.correspondence_manual_address}
                      select_address={this.state.correspondence_select_address}
                      residential_status={false}
                      address_details_form={correspondence_address_details_form}
                      custom_address_details_form={
                        correspondence_custom_address_details_form
                      }
                      residential_address_details_form={
                        correspondence_residential_address_details_form
                      }
                      select_address_details_form={
                        correspondence_select_address_details_form
                      }
                      fomrOne={FORM_TITLE.correspondence_address_details_form}
                      formTwo={
                        FORM_TITLE.correspondence_custom_address_details_form
                      }
                      fomrThree={
                        FORM_TITLE.correspondence_residential_address_details_form
                      }
                      formFour={
                        FORM_TITLE.correspondence_select_address_details_form
                      }
                      searchForAddress={this.correspondencesearchForAddress}
                      findAddress={this.correspondenceFindAddress}
                      manualAddress={this.correspondenceManualAddress}
                      onChange={this.onChange}
                      onBlur={this.onBlur}
                    />
                  </Collapse>
                  <SaveButtons
                    formTitle={FORM_TITLE.address_details_form}
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

export default AddressDetails;
