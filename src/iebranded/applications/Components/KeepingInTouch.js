import React from "react";
import { FormGroup, ButtonGroup } from "reactstrap";
import { DropDown, Check } from "@myie/interact-dom";

const KeepingInTouch = props => {
  const formTitle = props.formTitle;
  return (
    <div>
      <FormGroup>
        <DropDown
          subLabel="Contact method"
          id="contact_method"
          field="contact_method"
          onChange={e => props.onChange(formTitle, e)}
          onBlur={e => props.onBlur(formTitle, e)}
          validation={props.keepTouchForm.contact_method}
        >
          <option value="">(select one)</option>
          <option value="Mobile phone">Mobile phone</option>
          <option value="Other phone">Other phone</option>
          <option value="Email">Email</option>
          <option value="Post">Post</option>
        </DropDown>
      </FormGroup>
      <FormGroup>
        <Check
          label="Check this box if you do not want to receive information about [BRAND] products and services"
          id="products_and_services"
          field="products_and_services"
          onChange={e => props.onChange(formTitle, e)}
          onBlur={e => props.onBlur(formTitle, e)}
          validation={props.keepTouchForm.products_and_services}
        />
      </FormGroup>
      <ButtonGroup>
        <Check
          label="Check this box if you do not want to receive information from selected 3rd parties"
          id="selected_3rd_parties"
          field="selected_3rd_parties"
          onChange={e => props.onChange(formTitle, e)}
          onBlur={e => props.onBlur(formTitle, e)}
          validation={props.keepTouchForm.selected_3rd_parties}
        />
      </ButtonGroup>
    </div>
  );
};

export default KeepingInTouch;
