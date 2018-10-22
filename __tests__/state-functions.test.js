import { toggle } from "../src/iebranded/applications/stateFunctions";

let startState = {
  address_details: false
};

const finState = toggle(startState, "address_details");

test("toggle completes an false state value", () => {
  expect(finState.address_details).toEqual(true);
});
