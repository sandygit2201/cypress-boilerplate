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
  it("Login to sauce Demo site", () => {
    cy.visit("/");
    validateElementsInLoginPage();
    loginAs(USERNAME, PASSWORD);
  });
  it("verify product details", () => {
    cy.visit("/");
    loginAs(USERNAME, PASSWORD);
    const PRODUCTNAME = "fleeceJacket";
    verifyHomePage();
    navigateToProductPage(PRODUCTNAME);
    verifyProductDetails(PRODUCTNAME);
  });

  it("Order Product", () => {
    cy.visit("/");
    loginAs(USERNAME, PASSWORD);
    const PRODUCTNAME = "fleeceJacket";
    verifyHomePage();
    navigateToProductPage(PRODUCTNAME);
    verifyProductDetails(PRODUCTNAME);
    addProductToCart();
    navigateToCartPage();
    navigateToCheckoutPage();
    fillUserDetailsAndContinueToCheckout();
  });

});
