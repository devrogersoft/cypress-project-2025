describe('Test suite for account creation Page', () => 
    {
        beforeEach(()=>{
          cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
        }) 
          
    it('Should be able to create new savings account', () => {
     
      cy.get('form > :nth-child(2) > .input').clear();
      cy.get('form > :nth-child(2) > .input').type('123');
      cy.get(':nth-child(4) > .input').clear('1');
      cy.get(':nth-child(4) > .input').type('123');
      cy.get(':nth-child(5) > .button').click();
      cy.get('#leftPanel > ul > :nth-child(1) > a').click();
      cy.get('#fromAccountId').select('13788');
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
     
      cy.get('form > :nth-child(2) > .input').clear('1');
      cy.get('form > :nth-child(2) > .input').type('123');
      cy.get(':nth-child(4) > .input').clear('1');
      cy.get(':nth-child(4) > .input').type('123');
      cy.get('form > :nth-child(5)').click();
      cy.get(':nth-child(5) > .button').click();
      cy.get('#leftPanel > ul > :nth-child(1) > a').click();
      cy.get('#type').select('1');
      cy.get('#fromAccountId').select('13788');
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
  
    it('Should be able to verify ui elements of account creation', () => {
      
      cy.get('form > :nth-child(2) > .input').clear('1');
      cy.get('form > :nth-child(2) > .input').type('123');
      cy.get(':nth-child(4) > .input').clear('1');
      cy.get(':nth-child(4) > .input').type('123');
      cy.get(':nth-child(5) > .button').click();
      cy.get('#leftPanel > ul > :nth-child(1) > a').click();
      cy.get('#openAccountForm > .title').should('have.text', 'Open New Account');
      cy.get('form > :nth-child(1) > b').click();
      cy.get('form > :nth-child(1) > b').should('have.text', 'What type of Account would you like to open?');
      cy.get(':nth-child(5) > b').should('have.text', 'A minimum of $100.00 must be deposited into this account at time of opening. Please choose an existing account to transfer funds into the new account.');
      cy.get('form > div > .button').should('be.visible');
      cy.get('form > div > .button').click();
      cy.get('#openAccountResult > .title').should('have.text', 'Account Opened!');
      cy.get(':nth-child(3) > b').click();
      cy.get(':nth-child(3) > b').should('have.text', 'Your new account number:');
      cy.get('#newAccountId').click();
      cy.get('#accountDetails').click();
      cy.get('#availableBalance').should('have.text', '$100.00');
      cy.get('#accountDetails > .title').click();
      cy.get('#accountDetails > .title').should('have.text', 'Account Details');
      cy.get('thead > tr > :nth-child(2)').click();
      cy.get('thead > tr > :nth-child(2)').should('have.text', 'Transaction');
      
    });
  });