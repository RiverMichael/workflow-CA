const realUser = {
  email: "mokol@noroff.no",
  password: "mokomoko",
};

const fakeUser = {
  email: "wrong@stud.noroff.no",
  password: "wrongwrong",
};

describe("Login", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
  });

  it("Should login and visit the user profile", () => {
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(realUser.email);
    cy.get("#loginPassword").type(realUser.password);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    cy.get("span.profile-email").should("contain", realUser.email);
  });

  it("Should not allow login with invalid credentials and display an error message", () => {
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(fakeUser.email);
    cy.get("#loginPassword").type(fakeUser.password);
    cy.get("button[type=submit]").contains("Login").click();
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
