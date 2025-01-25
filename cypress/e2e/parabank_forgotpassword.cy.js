describe('Test suite', () => 
    {
      beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      }) 
        
      it('Should Validate empty form submission', function() 
      {
       
        cy.get('#loginPanel > :nth-child(2) > a').click();
        cy.get('.title').should('have.text', 'Customer Lookup');
        cy.get('#rightPanel > p').should('have.text', 'Please fill out the following information in order to validate your account.');
        cy.get('[colspan="2"] > .button').click();
        cy.get('#firstName\\.errors').should('have.text', 'First name is required.');
        cy.get('#lastName\\.errors').should('have.text', 'Last name is required.');
        cy.get('#address\\.street\\.errors').should('have.text', 'Address is required.');
        cy.get('#address\\.city\\.errors').should('have.text', 'City is required.');
        cy.get('#address\\.state\\.errors').should('have.text', 'State is required.');
        cy.get('#address\\.zipCode\\.errors').should('have.text', 'Zip Code is required.');
        cy.get('#ssn\\.errors').should('have.text', 'Social Security Number is required.');
       
      });
      it('Should Provide invalid customer informations to validate the account', function() 
      {
        
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        cy.get('#loginPanel > :nth-child(2) > a').click();
        cy.get('#firstName').clear('r');
        cy.get('#firstName').type('rtrt');
        cy.get('#lastName').clear('te');
        cy.get('#lastName').type('teey');
        cy.get('#address\\.street').clear('fg');
        cy.get('#address\\.street').type('fgg');
        cy.get('#address\\.city').clear('fg');
        cy.get('#address\\.city').type('fgdfg');
        cy.get('#address\\.state').clear('g');
        cy.get('#address\\.state').type('gdgd');
        cy.get('#address\\.zipCode').clear('fg');
        cy.get('#address\\.zipCode').type('fgfg');
        cy.get('#ssn').clear('fs');
        cy.get('#ssn').type('fsgfg');
        cy.get('[colspan="2"] > .button').click();
        cy.get('.error').should('have.text', 'The customer information provided could not be found.');
        cy.get('.error').should('be.visible');
       
      });
      it('Should Provide valid customer informations to validate the account', function() 
      {
     
        cy.get('#loginPanel > :nth-child(2) > a').click();
        cy.get('#firstName').clear('te');
        cy.get('#firstName').type('test firstname');
        cy.get('#lastName').clear('te');
        cy.get('#lastName').type('test lastname');
        cy.get('#address\\.street').clear('t');
        cy.get('#address\\.street').type('test address');
        cy.get('#address\\.city').clear('te');
        cy.get('#address\\.city').type('test city');
        cy.get('#address\\.state').clear('te');
        cy.get('#address\\.state').type('test state');
        cy.get('#address\\.zipCode').clear('t');
        cy.get('#address\\.zipCode').type('test zipcode');
        cy.get('#ssn').clear('te');
        cy.get('#ssn').type('test ssn');
        cy.get('[colspan="2"] > .button').click();
        cy.get('.title').should('have.text', 'Customer Lookup');
        cy.get('#rightPanel > :nth-child(2)').should('have.text', 'Your login information was located successfully. You are now logged in. ');
        cy.get('#rightPanel > :nth-child(3) > :nth-child(1)').should('have.text', 'Username');
        cy.get('#rightPanel > :nth-child(3)').should('have.text', '\n  Username: test5\n  \n  Password: test5\n');
        cy.get('#leftPanel > ul > :nth-child(8) > a').click();
       
      });
      it('Should Verify the UI elements of contact us form', function() 
      {
      
        cy.get('#loginPanel > :nth-child(2) > a').click();
        cy.get(':nth-child(1) > [align="right"] > b').click();
        cy.get(':nth-child(1) > [align="right"] > b').should('have.text', 'First Name:');
        cy.get(':nth-child(2) > [align="right"] > b').should('have.text', 'Last Name:');
        cy.get(':nth-child(3) > [align="right"] > b').should('have.text', 'Address:');
        cy.get(':nth-child(6) > [align="right"] > b').should('have.text', 'Zip Code:');
        cy.get(':nth-child(7) > [align="right"] > b').should('have.text', 'SSN:');
        cy.get('[colspan="2"] > .button').should('be.enabled');
        cy.get('[colspan="2"] > .button').should('be.visible');
        cy.get('.title').should('have.text', 'Customer Lookup');
        cy.get('body').click();
        cy.get('#rightPanel > p').should('have.text', 'Please fill out the following information in order to validate your account.');
        
      });
    });