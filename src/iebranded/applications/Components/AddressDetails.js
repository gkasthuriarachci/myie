import React from "react";
import { Row, Col, Form, FormGroup, ButtonGroup, Collapse } from "reactstrap";
import { Form as FormUpdater, Validate } from "@myie/interact";
import { Radio, RadioGroup } from "@myie/interact-dom";

import { toggle } from "../stateFunctions";

import { FORM_TITLE } from "../Constents/common";
import SectionHeader from "./SectionHeader";
import SaveButtons from "./SaveButtons";
import AddressForm from "./AddressForm";

class AddressDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address_details: false,
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
    this.setState(toggle(this.state, "address_details"));
  };

  onChange = (selected_form, e) => {
    // To do
    // var a = {}
    // a[selected_form] = FormUpdater.update(selected_form_obj, e.target)
    // this.setState({ ...this.state, a })

    switch (selected_form) {
      case FORM_TITLE.address_details_form:
        const address_details_form = FormUpdater.update(
          this.state.address_details_form,
          e.target
        );

        let show_correspondence_address = false;
        if (
          e.target.name === "correspondence_address" &&
          e.target.value === "yes"
        ) {
          show_correspondence_address = true;
        }

        this.setState({
          ...this.state,
          address_details_form,
          show_correspondence_address
        });
        return;
      case FORM_TITLE.custom_address_details_form:
        const custom_address_details_form = FormUpdater.update(
          this.state.custom_address_details_form,
          e.target
        );
        this.setState({ ...this.state, custom_address_details_form });
        return;

      case FORM_TITLE.correspondence_address_details_form:
        const correspondence_address_details_form = FormUpdater.update(
          this.state.correspondence_address_details_form,
          e.target
        );
        this.setState({ ...this.state, correspondence_address_details_form });
        return;
      case FORM_TITLE.correspondence_custom_address_details_form:
        const correspondence_custom_address_details_form = FormUpdater.update(
          this.state.correspondence_custom_address_details_form,
          e.target
        );
        this.setState({
          ...this.state,
          correspondence_custom_address_details_form
        });
        return;
      case FORM_TITLE.correspondence_residential_address_details_form:
        const correspondence_residential_address_details_form = FormUpdater.update(
          this.state.correspondence_residential_address_details_form,
          e.target
        );
        this.setState({
          ...this.state,
          correspondence_residential_address_details_form
        });
        return;
      case FORM_TITLE.correspondence_select_address_details_form:
        const correspondence_select_address_details_form = FormUpdater.update(
          this.state.correspondence_select_address_details_form,
          e.target
        );
        this.setState({
          ...this.state,
          correspondence_select_address_details_form
        });
        return;

      case FORM_TITLE.residential_address_details_form:
        const residential_address_details_form = FormUpdater.update(
          this.state.residential_address_details_form,
          e.target
        );

        let correspondence_address = false;
        if (e.target.id === "living_year" && e.target.value !== "") {
          correspondence_address = true;
        }

        this.setState({
          ...this.state,
          residential_address_details_form,
          correspondence_address
        });
        return;
    }
  };

  onBlur = (selected_form, e) => {
    // To do
    // var a = {}
    // a[selected_form] = FormUpdater.update(selected_form_obj, e.target)
    // this.setState({ ...this.state, a })

    switch (selected_form) {
      case FORM_TITLE.address_details_form:
        const address_details_form = FormUpdater.update(
          this.state.address_details_form,
          e.target,
          true
        );
        this.setState({ ...this.state, address_details_form });
        return;
      case FORM_TITLE.custom_address_details_form:
        const custom_address_details_form = FormUpdater.update(
          this.state.custom_address_details_form,
          e.target,
          true
        );
        this.setState({ ...this.state, custom_address_details_form });
        return;
      case FORM_TITLE.residential_address_details_form:
        const residential_address_details_form = FormUpdater.update(
          this.state.residential_address_details_form,
          e.target,
          true
        );
        this.setState({ ...this.state, residential_address_details_form });
        return;

      case FORM_TITLE.correspondence_address_details_form:
        const correspondence_address_details_form = FormUpdater.update(
          this.state.correspondence_address_details_form,
          e.target,
          true
        );
        this.setState({ ...this.state, correspondence_address_details_form });
        return;
      case FORM_TITLE.correspondence_custom_address_details_form:
        const correspondence_custom_address_details_form = FormUpdater.update(
          this.state.correspondence_custom_address_details_form,
          e.target,
          true
        );
        this.setState({
          ...this.state,
          correspondence_custom_address_details_form
        });
        return;
      case FORM_TITLE.correspondence_residential_address_details_form:
        const correspondence_residential_address_details_form = FormUpdater.update(
          this.state.correspondence_residential_address_details_form,
          e.target,
          true
        );
        this.setState({
          ...this.state,
          correspondence_residential_address_details_form
        });
        return;
      case FORM_TITLE.correspondence_select_address_details_form:
        const correspondence_select_address_details_form = FormUpdater.update(
          this.state.correspondence_select_address_details_form,
          e.target,
          true
        );
        this.setState({
          ...this.state,
          correspondence_select_address_details_form
        });
        return;
    }
  };

  continue = (section, submitSave) => {
    let form = null;
    if (section === FORM_TITLE.address_details_form) {
      const address_details_form = Validate.form(
        this.state.address_details_form
      );
      form = address_details_form;

      let custom_address_details_form = this.state.custom_address_details_form;
      let residential_address_details_form = this.state
        .residential_address_details_form;

      let correspondence_address_details_form = this.state
        .correspondence_address_details_form;
      let correspondence_custom_address_details_form = this.state
        .correspondence_custom_address_details_form;

      let noAddressSelected = false;

      if (this.state.manual_address) {
        custom_address_details_form = Validate.form(
          custom_address_details_form
        );
        if (!custom_address_details_form.approved) {
          form.approved = false;
        }
      }

      if (this.state.residential_status) {
        residential_address_details_form = Validate.form(
          residential_address_details_form
        );
        if (!residential_address_details_form.approved) {
          form.approved = false;
        }
      }

      if (
        this.state.correspondence_address &&
        this.state.show_correspondence_address
      ) {
        correspondence_address_details_form = Validate.form(
          correspondence_address_details_form
        );
        if (!correspondence_address_details_form.approved) {
          form.approved = false;
        }

        if (this.state.correspondence_manual_address) {
          correspondence_custom_address_details_form = Validate.form(
            correspondence_custom_address_details_form
          );
          if (!correspondence_custom_address_details_form.approved) {
            form.approved = false;
          }
        }
      }

      if (!this.state.select_address && form.approved) {
        form.approved = false;
        noAddressSelected = true;
      }

      this.setState({
        ...this.state,
        address_details_form,
        custom_address_details_form,
        residential_address_details_form,
        correspondence_address_details_form,
        correspondence_custom_address_details_form,
        noAddressSelected
      });
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

  manualAddress = () => {
    const manual_address = true;
    const select_address = false;
    const residential_status = true;
    this.setState({
      ...this.state,
      manual_address,
      select_address,
      residential_status
    });
  };

  searchForAddress = () => {
    const manual_address = false;
    const select_address = false;
    const residential_status = false;
    this.setState({
      ...this.state,
      manual_address,
      select_address,
      residential_status
    });
  };

  findAddress = () => {
    const address_details_form = Validate.form(this.state.address_details_form);
    this.setState({ ...this.state, address_details_form });

    if (address_details_form.approved) {
      const manual_address = false;
      const select_address = true;
      const noAddressSelected = false;
      this.setState({ manual_address, select_address, noAddressSelected });
    } else {
      const noAddressSelected = true;
      this.setState({ ...this.state, noAddressSelected });
    }
  };

  // To do: remove formTitle
  continue = (formTitle, submitSave) => {
    const address_details_form = Validate.form(this.state.address_details_form);
    this.setState({ ...this.state, address_details_form });

    if (submitSave === "save") {
      this.toggle();
      console.log(" AboutYou save.", address_details_form);
    } else if (submitSave === "submit" && address_details_form.approved) {
      this.toggle();
      console.log(" AboutYou submit.", address_details_form);
    } else {
      console.log(" AboutYou invalid!", address_details_form);
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
          isOpen={!this.state.address_details}
          onClick={() => this.toggle()}
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
