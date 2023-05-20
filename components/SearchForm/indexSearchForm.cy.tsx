import React from "react";
import SearchForm from "./index";

describe("<SearchForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    const onChangeSpy = cy.spy().as("onChangeSpy");
    const onClear = cy.spy().as("onClearSpy");
    const onSubmit = cy.spy().as("onSubmitSpy");
    cy.mount(
      <SearchForm
        onSubmit={onSubmit}
        disabled={false}
        setKeywordSearch={onChangeSpy}
        keyword="test"
        onClear={onClear}
      />
    );
    cy.get("[data-cy=keyword]").should("have.value", "test");
    cy.get("[data-cy=reset-btn]").click();
    cy.get("@onClearSpy").should("have.been.called");

    cy.get("[data-cy=search-btn]").click();
    cy.get("@onSubmitSpy").should("have.been.called");

    cy.get("[data-cy=keyword]").type("keyword");
    cy.get("@onChangeSpy").should("have.been.called");
  });
});
