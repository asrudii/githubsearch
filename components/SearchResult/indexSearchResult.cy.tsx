import React from "react";
import SearchResult from "./index";

describe("<SearchResult />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <SearchResult
        data={[{ id: 1, login: "test-name", avatar_url: "https://test.com" }]}
        keyword="test"
      />
    );
    cy.get("[data-cy=showing-for]").should("have.text", '"test"');
  });
});
