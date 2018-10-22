import React from "react";
import { Row, Col, Form, FormGroup, Button, Collapse } from "reactstrap";

import Header from "./Components/Header";
import AboutYou from "./Components/AboutYou";
import AddressDetails from "./Components/AddressDetails";
import Finances from "./Components/Finances";
import OptionalBenefits from "./Components/OptionalBenefits";

const FORM_TITLE = {
  section_five: "section_five"
};

class CreditCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      section_five: true
    };
  }

  toggle = section => {
    switch (section) {
      case FORM_TITLE.section_five:
        this.setState({
          ...this.state,
          section_five: !this.state.section_five
        });
        return;
    }
  };

  submitSection = section => {
    switch (section) {
      case FORM_TITLE.section_five:
        this.setState({
          ...this.state,
          section_five: !this.state.section_five
        });
        return;
    }
  };

  submitAll = submitSave => {};

  render() {
    return (
      <div id="credit-card">
        <Header />
        <AboutYou showAddressDetails={this.toggle} />
        <AddressDetails />
        <Finances />
        <OptionalBenefits />
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
