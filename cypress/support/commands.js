// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    //cy.get('a').contains(label).click()
    //Put user and name
    cy.get('input[name="email_address"]').clear();
    cy.get('input[name="email_address"]').type(email);
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type(password);
    //Do login
    cy.get('#tdb1').click();
});

Cypress.Commands.add('updateQuantity', (quantity) => {
    cy.get('input[name="cart_quantity[]"]').clear();
    cy.get('input[name="cart_quantity[]"]').type(quantity);
    //Update quantity tdb5
    cy.contains('Update').click();
});

Cypress.Commands.add('selectProduct', (product) => {
    cy.contains(product).click();
});

Cypress.Commands.add('completePaymentInformation', (typePayment) => {
    //Payment information
    cy.get('[type="radio"]').check(typePayment);
    //Continue
    cy.get('#tdb6').click();
});

Cypress.Commands.add('checkQuantity', (quantity) => {
    cy.get(
        '#columnRight > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(1)'
    ).should('contain', quantity);
    cy.contains('Checkout').click();
});
