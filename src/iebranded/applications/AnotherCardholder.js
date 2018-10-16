import React from "react";
import { FormGroup, ButtonGroup } from "reactstrap";
import { Text, DropDown, Check } from "@myie/interact-dom";

const AnotherCardholder = props => {
  const { formTitle, cardholder_form, onChange, onBlur } = props;

  return (
    <div>
      <FormGroup>
        <DropDown
          subLabel="Title"
          id="title"
          field="title"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={cardholder_form.title}
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
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={cardholder_form.first_name}
        />
      </FormGroup>
      <FormGroup>
        <Text
          subLabel="Middle name (optional)"
          id="middle_name"
          field="middle_name"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={cardholder_form.middle_name}
        />
      </FormGroup>
      <FormGroup>
        <Text
          subLabel="Last name"
          id="last_name"
          field="last_name"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={cardholder_form.last_name}
        />
      </FormGroup>
      <FormGroup>
        <DropDown
          subLabel="Gender"
          id="gender"
          field="gender"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={cardholder_form.gender}
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
            onChange={e => onChange(formTitle, e)}
            onBlur={e => onBlur(formTitle, e)}
            validation={cardholder_form.b_day}
          >
            <option value="">Day</option>
            <option value="1">1</option>
          </DropDown>{" "}
          <DropDown
            id="b_month"
            field="b_month"
            onChange={e => onChange(formTitle, e)}
            onBlur={e => onBlur(formTitle, e)}
            validation={cardholder_form.b_month}
          >
            <option value="">Month</option>
            <option value="1">1</option>
          </DropDown>{" "}
          <DropDown
            id="b_year"
            field="b_year"
            onChange={e => onChange(formTitle, e)}
            onBlur={e => onBlur(formTitle, e)}
            validation={cardholder_form.b_year}
          >
            <option value="">Year</option>
            <option value="1">1</option>
          </DropDown>
        </ButtonGroup>
      </FormGroup>
      <FormGroup>
        <DropDown
          subLabel="Relationship to you"
          id="relationship"
          field="relationship"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={cardholder_form.relationship}
        >
          <option value="">(select one)</option>
          <option value="Spouse">Spouse</option>
          <option value="Parent">Parent</option>
          <option value="Child">Child</option>
          <option value="Civil partner">Civil partner</option>
          <option value="Other relation">Other relation</option>
          <option value="Other (not related)">Other (not related)</option>
        </DropDown>
      </FormGroup>
      <FormGroup>
        <DropDown
          subLabel="Marital status"
          id="marital_status"
          field="marital_status"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={cardholder_form.marital_status}
        >
          <option value="">(select one)</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Civil partnership">Civil partnership</option>
        </DropDown>
      </FormGroup>
      <FormGroup>
        <DropDown
          subLabel="Your nationality"
          id="nationality"
          field="nationality"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={cardholder_form.nationality}
        >
          <option value="">(select one)</option>
          <option value="British">British</option>
          <option value="Non British">Non British</option>
        </DropDown>
      </FormGroup>
      <FormGroup>
        <Text
          subLabel="Mobile number"
          id="mobile_number"
          field="mobile_number"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={cardholder_form.mobile_number}
        />
      </FormGroup>
      <FormGroup>
        <Text
          subLabel="Other phone number (optional)"
          id="other_phone"
          field="other_phone"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={cardholder_form.other_phone}
        />
      </FormGroup>
      <ButtonGroup>
        <Check
          label="I confirm that the additional card holder lives at the same address as me"
          id="same_address"
          field="same_address"
          onChange={e => props.onChange(formTitle, e)}
          onBlur={e => props.onBlur(formTitle, e)}
          validation={cardholder_form.same_address}
        />
      </ButtonGroup>
    </div>
  );
};

export default AnotherCardholder;
