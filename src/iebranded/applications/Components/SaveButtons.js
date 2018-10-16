import React from "react";
import { FormGroup, Button } from "reactstrap";

const SaveButtons = props => {
  const { formTitle, saveForm } = props;

  return (
    <div>
      <FormGroup>
        <Button
          id={"continue"}
          type="button"
          color="primary"
          onClick={() => saveForm(formTitle, "submit")}
        >
          Continue
        </Button>{" "}
        <Button
          id={"save"}
          type="button"
          outline
          color="primary"
          onClick={() => saveForm(formTitle, "save")}
        >
          Save for later
        </Button>{" "}
      </FormGroup>
    </div>
  );
};

export default SaveButtons;
