describe('Test suite for account creation Page', () => 
    {
        beforeEach(()=>{
          cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
        }) 
          
    it('Should be able to create new savings account', () => {
      
      cy.get('form > :nth-child(2) > .input').type('user3198');
      cy.get(':nth-child(4) > .input').type('user3198');
      cy.get(':nth-child(5) > .button').click();
     
      cy.get('#leftPanel > ul > :nth-child(1) > a').click();
      cy.get('#fromAccountId').select('14787');
      cy.get('form > div > .button').click();
      cy.get('#openAccountResult > .title').click();
      cy.get('#openAccountResult > .title').click();
      cy.get('#openAccountResult > .title').should('have.text', 'Account Opened!');
      cy.get('#openAccountResult > :nth-child(2)').click();
      cy.get('#openAccountResult > :nth-child(2)').click();
      cy.get('#openAccountResult > :nth-child(2)').should('have.text', 'Congratulations, your account is now open.');
      cy.get('#newAccountId').click();
      cy.get('#accountDetails > .title').click();
      cy.get('#accountDetails > .title').click();
      cy.get('#accountDetails > .title').should('have.text', 'Account Details');
      cy.get('#balance').click();
      cy.get('#balance').click();
      cy.get('#balance').should('have.text', '$100.00');
      cy.get('thead > tr > :nth-child(2)').click();
      cy.get('thead > tr > :nth-child(2)').click();
      cy.get('thead > tr > :nth-child(2)').should('have.text', 'Transaction');
      cy.get('thead > tr > :nth-child(3)').click();
      cy.get('thead > tr > :nth-child(3)').click();
      cy.get('thead > tr > :nth-child(3)').should('have.text', 'Debit (-)');
      
    });
  
    it('Should be able to create new checking accoubnt', () => {
     
      cy.get('form > :nth-child(2) > .input').type('user3198');
      cy.get(':nth-child(4) > .input').type('user3198');
      cy.get('form > :nth-child(5)').click();
      cy.get(':nth-child(5) > .button').click();
      cy.get('#leftPanel > ul > :nth-child(1) > a').click();
      cy.get('#type').select('1');
      cy.get('#fromAccountId').select('14787');
      cy.get('form > div > .button').click();
      cy.get('#openAccountResult > .title').click();
      cy.get('#openAccountResult > .title').click();
      cy.get('#openAccountResult > .title').should('have.text', 'Account Opened!');
      cy.get('#openAccountResult > :nth-child(2)').click();
      cy.get('#openAccountResult > :nth-child(2)').click();
      cy.get('#openAccountResult > :nth-child(2)').should('have.text', 'Congratulations, your account is now open.');
      cy.get('#newAccountId').click();
      cy.get('#accountType').click();
      cy.get('#accountType').click();
      cy.get('#accountType').should('have.text', 'SAVINGS');
      cy.get('#balance').click();
      cy.get('#balance').click();
      cy.get('#balance').should('have.text', '$100.00');
      cy.get('thead > tr > :nth-child(2)').click();
      cy.get('thead > tr > :nth-child(2)').click();
      cy.get('thead > tr > :nth-child(2)').should('have.text', 'Transaction');
      
    });
  
    
    });
