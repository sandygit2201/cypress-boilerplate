export function loginAs(username,password){
    cy.get('#user-name').type(username);
    cy.get('#password').type(password, { log: false });
    cy.get('#login-button').click();
}

export function validateElementsInLoginPage(){
    cy.get('#user-name').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#login-button');
}