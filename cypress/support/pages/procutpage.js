import "cypress-xpath";

export function verifyProductDetails(productName) {
  cy.fixture("productslist").then((ProductList) => {
    cy.contains(ProductList[productName].name).should("be.visible");
    cy.contains(ProductList[productName].price).should("be.visible");
    cy.contains(ProductList[productName].details).should("be.visible");
  });
}

export function addProductToCart() {
    cy.contains('Add to cart').click();
}
