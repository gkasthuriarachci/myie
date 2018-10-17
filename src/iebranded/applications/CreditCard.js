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
import { Text, DropDown, Check, RadioGroup, Radio } from "@myie/interact-dom";

import Header from "./Components/Header";
import SectionHeader from "./Components/SectionHeader";
import SaveButtons from "./Components/SaveButtons";
import AddressForm from "./Components/AddressForm";
import Transfer from "./Components/Transfer";
import KeepingInTouch from "./Components/KeepingInTouch";
import AboutHolder from "./Components/AboutHolder";
import AboutYou from "./Components/AboutYou";
import AddressDetails from "./Components/AddressDetails";
import Finances from "./Components/Finances";

const FORM_TITLE = {
  about_you_form: "about_you_form",
  your_finances_form: "your_finances_form",

  optional_benefits_form: "optional_benefits_form",
  number_of_transfers_form: "number_of_transfers_form",
  transfer_balance_1_form: "transfer_balance_1_form",
  transfer_balance_2_form: "transfer_balance_2_form",
  cardholder_form: "cardholder_form",
  keeping_in_touch_form: "keeping_in_touch_form",

  section_five: "section_five",

  address_details_form: "address_details_form",
  custom_address_details_form: "custom_address_details_form",
  residential_address_details_form: "residential_address_details_form",
  select_address_details_form: "select_address_details_form",

  correspondence_address_details_form: "correspondence_address_details_form",
  correspondence_custom_address_details_form:
    "correspondence_custom_address_details_form",
  correspondence_residential_address_details_form:
    "correspondence_residential_address_details_form",
  correspondence_select_address_details_form:
    "correspondence_select_address_details_form",

  direct_debit_form: "direct_debit_form",
  employer_details_form: "employer_details_form",
  employer_address_details_form: "employer_address_details_form",
  employer_custom_address_details_form: "employer_custom_address_details_form",
  employer_residential_address_details_form:
    "employer_residential_address_details_form",
  employer_select_address_details_form: "employer_select_address_details_form",
  income_and_outgoings_form: "income_and_outgoings_form"
};

class CreditCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about_you: true,

      address_details: false,

      your_finances: false,

      optional_benefits: false,
      transfer: false,
      number_of_transfers_1: false,
      number_of_transfers_2: false,
      another_cardholder: false,
      keeping_in_touch: false,

      section_five: true,

      manual_address: false,
      residential_status: false,
      select_address: false,
      noAddressSelected: false,
      correspondence_address: false,
      show_correspondence_address: false,

      correspondence_details: false,
      correspondence_manual_address: false,
      correspondence_select_address: false,
      correspondence_noAddressSelected: false,

      paying_by_debit: false,

      income_and_outgoings: false,

      employer_details: false,
      employer_manual_address: false,
      employer_select_address: false,
      employer_residential_status: false,
      employer_noAddressSelected: false,

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
      },

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
      },

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
      },

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

  correspondenceManualAddress = () => {
    const correspondence_manual_address = true;
    const correspondence_select_address = false;
    this.setState({
      ...this.state,
      correspondence_manual_address,
      correspondence_select_address
    });
  };

  correspondenceSearchForAddress = () => {
    const correspondence_manual_address = false;
    const correspondence_select_address = false;
    this.setState({
      ...this.state,
      correspondence_manual_address,
      correspondence_select_address
    });
  };

  correspondenceFindAddress = () => {
    const correspondence_address_details_form = Validate.form(
      this.state.correspondence_address_details_form
    );
    this.setState({ ...this.state, correspondence_address_details_form });

    if (correspondence_address_details_form.approved) {
      const correspondence_manual_address = false;
      const correspondence_select_address = true;
      const correspondence_noAddressSelected = false;
      this.setState({
        correspondence_manual_address,
        correspondence_select_address,
        correspondence_noAddressSelected
      });
    } else {
      const correspondence_noAddressSelected = true;
      this.setState({ ...this.state, correspondence_noAddressSelected });
    }
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

  toggle = section => {
    switch (section) {
      case FORM_TITLE.about_you_form:
        this.setState({ ...this.state, about_you: !this.state.about_you });
        return;
      case FORM_TITLE.address_details_form:
        this.setState({
          ...this.state,
          address_details: !this.state.address_details
        });
        return;
      case FORM_TITLE.your_finances_form:
        this.setState({
          ...this.state,
          your_finances: !this.state.your_finances
        });
        return;
      case FORM_TITLE.optional_benefits_form:
        this.setState({
          ...this.state,
          optional_benefits: !this.state.optional_benefits
        });
        return;
      case FORM_TITLE.section_five:
        this.setState({
          ...this.state,
          section_five: !this.state.section_five
        });
        return;
    }
  };

  onChange = (selected_form, e) => {
    // To do
    // var a = {}
    // a[selected_form] = FormUpdater.update(selected_form_obj, e.target)
    // this.setState({ ...this.state, a })

    switch (selected_form) {
      case FORM_TITLE.about_you_form:
        const about_you_form = FormUpdater.update(
          this.state.about_you_form,
          e.target
        );
        this.setState({ ...this.state, about_you_form });
        return;
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
      case FORM_TITLE.your_finances_form:
        // To do
        //(e.target.id === 'employment_status')? this.onEmployentStatus(e.target.value) : null

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
    // To do
    // var a = {}
    // a[selected_form] = FormUpdater.update(selected_form_obj, e.target)
    // this.setState({ ...this.state, a })

    switch (selected_form) {
      case FORM_TITLE.about_you_form:
        const about_you_form = FormUpdater.update(
          this.state.about_you_form,
          e.target,
          true
        );
        this.setState({ ...this.state, about_you_form });
        return;
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

    if (section === FORM_TITLE.about_you_form) {
      const about_you_form = Validate.form(this.state.about_you_form);
      this.setState({ ...this.state, about_you_form });
      form = about_you_form;
    } else if (section === FORM_TITLE.address_details_form) {
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
    } else if (section === FORM_TITLE.your_finances_form) {
      const your_finances_form = Validate.form(this.state.your_finances_form);
      form = your_finances_form;

      let direct_debit_form = this.state.direct_debit_form;
      let employer_details_form = this.state.employer_details_form;
      let income_and_outgoings_form = this.state.income_and_outgoings_form;

      if (this.state.paying_by_debit) {
        direct_debit_form = Validate.form(direct_debit_form);
        if (!direct_debit_form.approved) {
          form.approved = false;
        }
      }
      if (this.state.employer_details) {
        employer_details_form = Validate.form(employer_details_form);
        if (!employer_details_form.approved) {
          form.approved = false;
        }
      }
      if (this.state.income_and_outgoings) {
        income_and_outgoings_form = Validate.form(income_and_outgoings_form);
        if (!income_and_outgoings_form.approved) {
          form.approved = false;
        }
      }

      this.setState({
        ...this.state,
        your_finances_form,
        direct_debit_form,
        employer_details_form,
        income_and_outgoings_form
      });
    } else if (section === FORM_TITLE.optional_benefits_form) {
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

  submitSection = section => {
    switch (section) {
      case FORM_TITLE.about_you_form:
        this.setState({
          ...this.state,
          about_you: !this.state.about_you,
          address_details: !this.state.address_details
        });
        return;
      case FORM_TITLE.address_details_form:
        this.setState({
          ...this.state,
          address_details: !this.state.address_details,
          your_finances: !this.state.your_finances
        });
        return;
      case FORM_TITLE.your_finances_form:
        this.setState({
          ...this.state,
          your_finances: !this.state.your_finances,
          optional_benefits: !this.state.optional_benefits
        });
        return;
      case FORM_TITLE.optional_benefits_form:
        this.setState({
          ...this.state,
          optional_benefits: !this.state.optional_benefits
        });
        return;
      case FORM_TITLE.section_five:
        this.setState({
          ...this.state,
          section_five: !this.state.section_five
        });
        return;
    }
  };

  submitAll = submitSave => {
    let { about_you_form } = this.state;
    let { address_details_form } = this.state;
    let { custom_address_details_form } = this.state;
    let { residential_address_details_form } = this.state;
    let { your_finances_form } = this.state;
    let direct_debit_form = this.state.direct_debit_form;
    let employer_details_form = this.state.employer_details_form;
    let income_and_outgoings_form = this.state.income_and_outgoings_form;
    let { optional_benefits_form } = this.state;

    about_you_form = Validate.form(about_you_form);
    address_details_form = Validate.form(address_details_form);
    custom_address_details_form = Validate.form(custom_address_details_form);
    residential_address_details_form = Validate.form(
      residential_address_details_form
    );
    your_finances_form = Validate.form(your_finances_form);
    optional_benefits_form = Validate.form(optional_benefits_form);

    if (this.state.manual_address) {
      custom_address_details_form = Validate.form(custom_address_details_form);
    }
    if (this.state.residential_status) {
      residential_address_details_form = Validate.form(
        residential_address_details_form
      );
    }
    if (this.state.paying_by_debit) {
      direct_debit_form = Validate.form(direct_debit_form);
    }
    if (this.state.employer_details) {
      employer_details_form = Validate.form(employer_details_form);
    }
    if (this.state.income_and_outgoings) {
      income_and_outgoings_form = Validate.form(income_and_outgoings_form);
    }
    if (submitSave === "save") {
      console.log(
        "form save.",
        about_you_form,
        address_details_form,
        custom_address_details_form,
        your_finances_form,
        optional_benefits_form
      );
      this.setState({
        about_you: false,
        address_details: false,
        your_finances: false,
        optional_benefits: false
      });
    } else if (
      about_you_form.approved &&
      address_details_form.approved &&
      custom_address_details_form.approved &&
      your_finances_form.approved &&
      optional_benefits_form.approved
    ) {
      console.log(
        "form submit.",
        about_you_form,
        address_details_form,
        custom_address_details_form,
        your_finances_form,
        optional_benefits_form
      );
      this.setState({
        about_you: false,
        address_details: false,
        your_finances: false,
        optional_benefits: false
      });
    } else {
      console.log("form invalid!");
      this.setState({
        about_you: !about_you_form.approved,
        address_details: !address_details_form.approved,
        your_finances: !your_finances_form.approved,
        optional_benefits: !optional_benefits_form.approved,
        about_you_form,
        address_details_form,
        your_finances_form,
        optional_benefits_form
      });
    }
  };

  render() {
    const { about_you_form } = this.state;

    const {
      address_details_form,
      custom_address_details_form,
      residential_address_details_form,
      select_address_details_form
    } = this.state;

    const {
      correspondence_address_details_form,
      correspondence_custom_address_details_form,
      correspondence_residential_address_details_form,
      correspondence_select_address_details_form
    } = this.state;

    const { your_finances_form, direct_debit_form } = this.state;

    const {
      employer_address_details_form,
      employer_custom_address_details_form,
      employer_residential_address_details_form,
      employer_select_address_details_form,
      income_and_outgoings_form
    } = this.state;

    const {
      optional_benefits_form,
      number_of_transfers_form,
      transfer_balance_1_form,
      transfer_balance_2_form,
      cardholder_form,
      keeping_in_touch_form
    } = this.state;

    return (
      <div id="credit-card">
        <Header />
        {/* about_you_form */}
        <AboutYou showAddressDetails={this.toggle} />
        {/* address details */}
        <AddressDetails />
        {/* your finances */}
        <Finances />
        {/* optional benefits */}
        <div>
          <SectionHeader
            title={"5. Optional benefits and keeping in touch"}
            isOpen={!this.state.optional_benefits}
            onClick={() => this.toggle(FORM_TITLE.optional_benefits_form)}
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
                            Please tell us how many transfers you would like to
                            do
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
                              this.onBlur(
                                FORM_TITLE.number_of_transfers_form,
                                e
                              )
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
                              this.onChange(
                                FORM_TITLE.transfer_balance_1_form,
                                e
                              )
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
                      <RadioGroup
                        validation={optional_benefits_form.keep_touch}
                      >
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
                          this.continue(
                            FORM_TITLE.optional_benefits_form,
                            "save"
                          )
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
        {/* review and submit */}
        <div>
          <Collapse isOpen={this.state.section_five}>
            <a onClick={() => this.toggle(FORM_TITLE.section_five)}>
              <div>
                <h2>6. Review and submit</h2>
                <p>
                  Please make sure you review information you have entered above
                  and edit any of the sections as appropriate.
                  <br />
                  When you are sure that the information you have entered is
                  correct, you can submit your application.
                  <br />
                  You can also save your information and submit it at a later
                  time. Please note that your application will not be reviewed
                  until you have fully submitted it.
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
                        onClick={() => this.submitAll("submit")}
                      >
                        Submit
                      </Button>{" "}
                      <Button
                        id="form-save"
                        type="button"
                        outline
                        color="primary"
                        onClick={() => this.submitAll("save")}
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
      </div>
    );
  }
}

export default CreditCard;
