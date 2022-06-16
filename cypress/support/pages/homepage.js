import 'cypress-xpath'

// verify that user is navigated to homepage.
export function verifyHomePage(){
    cy.xpath('//div[@class="header_secondary_container"]/span').should("have.text","Products");
    cy.get('#shopping_cart_container').should('be.visible');
}



// Navigate to a required product page 
// @param: Product name
export function navigateToProductPage(product) {
  cy.fixture("productslist").then((ProductsDetails) => {
    const productName = ProductsDetails[product].name;
    const productLabelXpath=`//div[text()='${productName}']`
    const productId = ProductsDetails[product].id;
    cy.xpath(productLabelXpath).should('be.visible')
    cy.get(productId).click()
  });
}

// Navigate to cart page by clicking on cart icon.
export function navigateToCartPage(){
    cy.get('.shopping_cart_container').click();
}
