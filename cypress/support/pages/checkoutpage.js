export function fillUserDetailsAndContinueToCheckout() {
  cy.fixture("userdetails").then((UserInfo) => {
    cy.get("#first-name").type(UserInfo.firstName);
    cy.get("#last-name").type(UserInfo.lastName);
    cy.get("#postal-code").type(UserInfo.postelCode);
    cy.get("#continue").click();
  });
}

export function verifyCheckoutOverview() {
  cy.fixture("orderDetails").then((OrderDetails) => {
    cy.get(".summary_subtotal_label").should(
      "have.text",
      OrderDetails.subTotal
    );
    cy.get(".summary_value_label").should(
      "have.text",
      OrderDetails.paymentValue
    );
    cy.get(".summary_tax_label").should("have.text", OrderDetails.tax);
    cy.get(".summary_total_label").should("have.text", OrderDetails.total);
  });
}
