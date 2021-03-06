import React from "react";
import { Text, DropDown, TextArea } from "@myie/interact-dom";
import { Row, Col, FormGroup, Button, ButtonGroup, Collapse } from "reactstrap";

class AddressForm extends React.Component {
  render() {
    const fomrOne = this.props.fomrOne;
    const formTwo = this.props.formTwo;
    const fomrThree = this.props.fomrThree;
    const formFour = this.props.formFour;
    return (
      <div>
        <Row>
          <Col>
            <Collapse isOpen={this.props.manual_address}>
              <FormGroup>
                <Text
                  subLabel="Flat number (if applicable)"
                  id="flat_number"
                  field="flat_number"
                  onChange={e => this.props.onChange(formTwo, e)}
                  onBlur={e => this.props.onBlur(formTwo, e)}
                  validation={
                    this.props.custom_address_details_form.flat_number
                  }
                />
              </FormGroup>
            </Collapse>
            <FormGroup>
              <Text
                subLabel="House number (if applicable)"
                id="house_number"
                field="house_number"
                onChange={e => this.props.onChange(fomrOne, e)}
                onBlur={e => this.props.onBlur(fomrOne, e)}
                validation={this.props.address_details_form.house_number}
              />
            </FormGroup>
            <p>and / or</p>
            <FormGroup>
              <Text
                subLabel="House name (if applicable)"
                id="house_name"
                field="house_name"
                onChange={e => this.props.onChange(fomrOne, e)}
                onBlur={e => this.props.onBlur(fomrOne, e)}
                validation={this.props.address_details_form.house_name}
              />
            </FormGroup>
            <Collapse isOpen={this.props.manual_address}>
              <FormGroup>
                <Text
                  subLabel="Street"
                  id="street"
                  field="street"
                  onChange={e => this.props.onChange(formTwo, e)}
                  onBlur={e => this.props.onBlur(formTwo, e)}
                  validation={this.props.custom_address_details_form.street}
                />
              </FormGroup>
              <FormGroup>
                <Text
                  subLabel="Village/District (optional)"
                  id="district"
                  field="district"
                  onChange={e => this.props.onChange(formTwo, e)}
                  onBlur={e => this.props.onBlur(formTwo, e)}
                  validation={this.props.custom_address_details_form.district}
                />
              </FormGroup>
              <FormGroup>
                <Text
                  subLabel="Town/City"
                  id="city"
                  field="city"
                  onChange={e => this.props.onChange(formTwo, e)}
                  onBlur={e => this.props.onBlur(formTwo, e)}
                  validation={this.props.custom_address_details_form.city}
                />
              </FormGroup>
              <FormGroup>
                <Text
                  subLabel="County (optional)"
                  id="county"
                  field="county"
                  onChange={e => this.props.onChange(formTwo, e)}
                  onBlur={e => this.props.onBlur(formTwo, e)}
                  validation={this.props.custom_address_details_form.county}
                />
              </FormGroup>
            </Collapse>
            <FormGroup>
              <Text
                subLabel="Postcode"
                id="postcode"
                field="postcode"
                onChange={e => this.props.onChange(fomrOne, e)}
                onBlur={e => this.props.onBlur(fomrOne, e)}
                validation={this.props.address_details_form.postcode}
              />
            </FormGroup>
            <Collapse isOpen={this.props.manual_address}>
              <FormGroup>
                <Button color="link" onClick={this.props.searchForAddress}>
                  Search for an address
                </Button>
              </FormGroup>
            </Collapse>
            <Collapse isOpen={this.props.residential_status}>
              <FormGroup>
                <ButtonGroup>
                  <DropDown
                    subLabel="Residential status"
                    id="residential_status"
                    field="residential_status"
                    onChange={e => this.props.onChange(fomrThree, e)}
                    onBlur={e => this.props.onBlur(fomrThree, e)}
                    validation={
                      this.props.residential_address_details_form
                        .residential_status
                    }
                  >
                    <option value="">(select one)</option>
                    <option value="Owner">Owner</option>
                    <option value="Tenant">Tenant</option>
                  </DropDown>
                </ButtonGroup>
              </FormGroup>
              <FormGroup>
                <p>When did you start living at your current address?</p>
                <ButtonGroup>
                  <DropDown
                    id="living_month"
                    field="living_month"
                    onChange={e => this.props.onChange(fomrThree, e)}
                    onBlur={e => this.props.onBlur(fomrThree, e)}
                    validation={
                      this.props.residential_address_details_form.living_month
                    }
                  >
                    <option value="">Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </DropDown>{" "}
                  <DropDown
                    id="living_year"
                    field="living_year"
                    onChange={e => this.props.onChange(fomrThree, e)}
                    onBlur={e => this.props.onBlur(fomrThree, e)}
                    validation={
                      this.props.residential_address_details_form.living_year
                    }
                  >
                    <option value="">Year</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">Before 2010</option>
                  </DropDown>
                </ButtonGroup>
              </FormGroup>
            </Collapse>
            <Collapse isOpen={!this.props.manual_address}>
              <FormGroup>
                <Button
                  id="find_address"
                  type="button"
                  color="primary"
                  onClick={this.props.findAddress}
                >
                  Find address
                </Button>
                {" or "}
                <Button
                  id="manual_address"
                  type="button"
                  outline
                  color="primary"
                  onClick={this.props.manualAddress}
                >
                  Enter address manually
                </Button>{" "}
              </FormGroup>
            </Collapse>
            <Collapse isOpen={this.props.select_address}>
              <FormGroup>
                <TextArea
                  rows={6}
                  subLabel="Select an address"
                  id="select_address"
                  field="select_address"
                  onBlur={e => this.props.onBlur(formFour, e)}
                  d
                  validation={
                    this.props.select_address_details_form.select_address
                  }
                />
              </FormGroup>
              {"If your address is not shown, please enter it manually"}
            </Collapse>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddressForm;
