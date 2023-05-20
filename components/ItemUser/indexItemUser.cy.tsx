import React from "react";
import ItemUser from "./index";

describe("<ItemUser />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ItemUser username="test" avatarUrl="https://test.com" />);
    cy.get("[data-cy=username]").should("have.text", "test");
  });
});
