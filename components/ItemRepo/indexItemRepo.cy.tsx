import React from "react";
import ItemRepo from "./index";

describe("<ItemRepo />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ItemRepo name="test" description="test-desc" stargazersCount={2} />
    );
    cy.get("[data-cy=repo-name]").should("have.text", "test");
    cy.get("[data-cy=repo-description]").should("have.text", "test-desc");
    cy.get("[data-cy=repo-stargazerscount]").should("have.text", "2");
  });
});
