import React from "react";
import { Row, Col, FormGroup, ButtonGroup } from "reactstrap";
import { Text } from "@myie/interact-dom";

const Transfer = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <FormGroup>
        <Text
          subLabel="Card number"
          id="card_number"
          field="card_number"
          onChange={e => props.onChange(props.formTitle, e)}
          onBlur={e => props.onBlur(props.formTitle, e)}
          validation={props.transferFrom.card_number}
        />
      </FormGroup>
      <ButtonGroup>
        <p>Amount (£)</p>
        <Text
          id="transfer_amount_pounds"
          field="transfer_amount_pounds"
          onChange={e => props.onChange(props.formTitle, e)}
          onBlur={e => props.onBlur(props.formTitle, e)}
          validation={props.transferFrom.transfer_amount_pounds}
        />
        {" . "}
        <Text
          id="transfer_amount_pences"
          field="transfer_amount_pences"
          onChange={e => props.onChange(props.formTitle, e)}
          onBlur={e => props.onBlur(props.formTitle, e)}
          validation={props.transferFrom.transfer_amount_pences}
        />
      </ButtonGroup>
    </div>
  );
};

export default Transfer;
