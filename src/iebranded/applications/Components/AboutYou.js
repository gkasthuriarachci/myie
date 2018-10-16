import React from "react";
import { FormGroup, ButtonGroup } from "reactstrap";
import { Text, DropDown, Check } from "@myie/interact-dom";

const AboutYou = props => {
  const { formTitle, about_you_form, onChange, onBlur } = props;

  return (
    <div>
      <FormGroup>
        <DropDown
          subLabel="Title"
          id="title"
          field="title"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
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
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={about_you_form.first_name}
        />
      </FormGroup>
      <FormGroup>
        <Text
          subLabel="Middle name (optional)"
          id="middle_name"
          field="middle_name"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={about_you_form.middle_name}
        />
      </FormGroup>
      <FormGroup>
        <Text
          subLabel="Last name"
          id="last_name"
          field="last_name"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={about_you_form.last_name}
        />
      </FormGroup>
      <FormGroup>
        <Text
          subLabel="Any previous name (optional)"
          id="previous_name"
          field="previous_name"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={about_you_form.previous_name}
        />
      </FormGroup>
      <FormGroup>
        <DropDown
          subLabel="Gender"
          id="gender"
          field="gender"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
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
            onChange={e => onChange(formTitle, e)}
            onBlur={e => onBlur(formTitle, e)}
            validation={about_you_form.b_day}
          >
            <option value="">Day</option>
            <option value="1">1</option>
          </DropDown>{" "}
          <DropDown
            id="b_month"
            field="b_month"
            onChange={e => onChange(formTitle, e)}
            onBlur={e => onBlur(formTitle, e)}
            validation={about_you_form.b_month}
          >
            <option value="">Month</option>
            <option value="1">1</option>
          </DropDown>{" "}
          <DropDown
            id="b_year"
            field="b_year"
            onChange={e => onChange(formTitle, e)}
            onBlur={e => onBlur(formTitle, e)}
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
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={about_you_form.marital_status}
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
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
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
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={about_you_form.mobile}
        />
      </FormGroup>
      <FormGroup>
        <Text
          subLabel="Other phone number (optional)"
          id="other_phone"
          field="other_phone"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={about_you_form.other_phone}
        />
      </FormGroup>
      <FormGroup>
        <Text
          subLabel="Email address"
          id="email"
          field="email"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={about_you_form.email}
        />
      </FormGroup>
      <FormGroup>
        <Text
          subLabel="Confirm your email address"
          id="email_confirm"
          field="email_confirm"
          onChange={e => onChange(formTitle, e)}
          onBlur={e => onBlur(formTitle, e)}
          validation={about_you_form.email_confirm}
        />
      </FormGroup>
      <p>
        <strong>
          We will use your email address to send you emails to send you
          information about your application and account, and to notify you when
          your online statement is ready to view.
        </strong>
      </p>
    </div>
  );
};

export default AboutYou;
