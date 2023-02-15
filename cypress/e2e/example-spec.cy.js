describe('Test DemoSQAUPC', () => {
    let productDetails;
    //let productDetailsBeloved;
    beforeEach(() => {
        cy.visit('http://sqademosatp.net/catalog/');

        cy.fixture('productsamsumg').then((data) => {
            productDetails = data;
        });

        /* cy.fixture('productbeloved').then((data) => {
            productDetailsBeloved = data;
        });*/
    });

    it('Purchase Samsumg Galaly Tab', () => {
        const expectedSuccessful = 'Your Order Has Been Processed';
        //Select Prodcuct
        cy.selectProduct(productDetails.product);
        //Add to cart
        cy.contains('Add to Cart').click();
        //Update Quantity of product
        cy.updateQuantity(productDetails.quantity);
        //Assert quantity
        cy.checkQuantity(productDetails.quantity);
        //Put user and name
        cy.login(productDetails.email, productDetails.pwd);
        //Continue
        cy.get('#tdb6').click();
        //Payment information
        cy.completePaymentInformation(productDetails.typePayment);
        //Confirmation
        cy.get('#tdb5').click();
        //Check the order is successful
        cy.get('#bodyContent > h1').should('include.text', expectedSuccessful);
    });

    /*it('Try to purchase Beloved', () => {
        const expectedSuccessful = 'Your Order Has Been Processed';
        //Select Prodcuct
        //cy.selectProduct(productDetailsBeloved.product);
        cy.contains(productDetailsBeloved.product).click();
        //Add to cart
        cy.contains('Add to Cart').click().debug();
        //Update Quantity of product
        cy.updateQuantity(productDetailsBeloved.quantity);
        //Assert quantity
        cy.checkQuantity(productDetailsBeloved.quantity);
        //Put user and name
        cy.login(productDetailsBeloved.email, productDetailsBeloved.pwd);
        //Continue
        cy.get('#tdb6').click();
        //Payment information
        cy.completePaymentInformation(productDetailsBeloved.typePayment);
        //Confirmation
        cy.get('#tdb5').click();
        //Check the order is successful
        cy.get('#bodyContent > h1').should('include.text', expectedSuccessful);
    });*/
});
