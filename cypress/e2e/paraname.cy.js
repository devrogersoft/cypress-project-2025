describe('Test suite for account creation Page', () => 
    {
        beforeEach(()=>{
          cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
        }) 
          
    it('Should be able to create new savings account', () => {
     cy.get('[name="username"]').clear();
     cy.get('[name="username"]').type('test');



      cy.get('input[name="username"]').should('have.value','test');

      cy.get('input[name="username"]').should('have.value','test');

    });
});