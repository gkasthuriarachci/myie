import React from "react";
import { FormGroup, ButtonGroup } from "reactstrap";
import { Text } from "@myie/interact-dom";

const Transfer = props => {
  const formTitle = props.formTitle;

  return (
    <div>
      <h2>{props.title}</h2>
      <FormGroup>
        <Text
          subLabel="Card number"
          id="card_number"
          field="card_number"
          onChange={e => props.onChange(formTitle, e)}
          onBlur={e => props.onBlur(formTitle, e)}
          validation={props.transferFrom.card_number}
        />
      </FormGroup>
      <p>Amount (£)</p>
      <ButtonGroup>
        <Text
          id="transfer_amount_pounds"
          field="transfer_amount_pounds"
          onChange={e => props.onChange(formTitle, e)}
          onBlur={e => props.onBlur(formTitle, e)}
          validation={props.transferFrom.transfer_amount_pounds}
        />
        {" . "}
        <Text
          id="transfer_amount_pences"
          field="transfer_amount_pences"
          onChange={e => props.onChange(formTitle, e)}
          onBlur={e => props.onBlur(formTitle, e)}
          validation={props.transferFrom.transfer_amount_pences}
        />
      </ButtonGroup>
    </div>
  );
};

export default Transfer;
