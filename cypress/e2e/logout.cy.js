const user = {
  email: "mokol@noroff.no",
  password: "mokomoko",
};

describe("Logout", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
  });

  it("Should login a user and then logout to test the logout functionality", () => {
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(user.email);
    cy.get("#loginPassword").type(user.password);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    cy.get("button").contains("Logout").should("be.visible");
    cy.get("button").contains("Logout").click();
    cy.wait(500);
    cy.get("#registerModalLabel").should("be.visible");
  });
});
