import { API_SEARCH_USER, API_USER } from "@/constant/UrlList";
import authHeader from "./AuthHeader";

context("GET /repo", () => {
  it("gets repository list of users", () => {
    cy.request({
      method: "GET",
      url: `${API_USER}/test/repos`,
      headers: authHeader(),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).length.to.be.greaterThan(1);
    });
  });
});

context("GET /user", () => {
  it("gets a list of users", () => {
    cy.request("GET", `${API_SEARCH_USER}?q="test"&per_page=5`).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.items).length.to.be.greaterThan(1);
        expect(response.body.items).length.to.be.lessThan(6);
      }
    );
  });
});
