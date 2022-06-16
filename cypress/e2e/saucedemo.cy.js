import {
  loginAs,
  validateElementsInLoginPage,
} from "../support/pages/loginpage";
import {
  navigateToCartPage,
  navigateToProductPage,
  verifyHomePage,
} from "../support/pages/homepage";
import {
  addProductToCart,
  verifyProductDetails,
} from "../support/pages/procutpage";
import { navigateToCheckoutPage } from "../support/pages/cartpage";
import {
  fillUserDetails,
  fillUserDetailsAndContinueToCheckout,
} from "../support/pages/checkoutpage";

describe("Sauce demo spec", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");
  
  // Login to application and verify home page
  it("Login to sauce Demo site", () => {
    cy.visit("/");
    validateElementsInLoginPage();
    loginAs(USERNAME, PASSWORD);
    verifyHomePage()
  });

// Navigate to a product page and verify product details like product description, title and price
  it("Verify fleeceJacket product details", () => {
    cy.visit("/");
    loginAs(USERNAME, PASSWORD);
    const PRODUCTNAME = "fleeceJacket";
    navigateToProductPage(PRODUCTNAME);
    verifyProductDetails(PRODUCTNAME);
  });

  // Order a product and verify product  details at checkout page.
  it("Order fleeceJacket Product", () => {
    cy.visit("/");
    loginAs(USERNAME, PASSWORD);
    const PRODUCTNAME = "fleeceJacket";
    navigateToProductPage(PRODUCTNAME);
    addProductToCart();
    navigateToCartPage();
    navigateToCheckoutPage();
    fillUserDetailsAndContinueToCheckout();
  });

});
