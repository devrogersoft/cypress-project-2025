describe('Test suite', () => 
  {
    beforeEach(()=>{
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }) 
      
    it('Verify the register form UI elements', function() 
    {
      
      cy.get('.title').should('have.text', 'Signing up is easy!');
      cy.get('#rightPanel > p').should('have.text', 'If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.');
      cy.get(':nth-child(1) > [align="right"]').should('have.text', 'First Name:');
      cy.get(':nth-child(1) > [align="right"] > b').should('be.visible');
      cy.get(':nth-child(2) > [align="right"] > b').should('have.text', 'Last Name:');
      cy.get(':nth-child(2) > [align="right"] > b').should('be.visible');
      cy.get(':nth-child(3) > [align="right"] > b').should('have.text', 'Address:');
      cy.get(':nth-child(4) > [align="right"] > b').should('have.text', 'City:');
      cy.get(':nth-child(5) > [align="right"] > b').should('have.text', 'State:');
      cy.get(':nth-child(6) > [align="right"] > b').should('have.text', 'Zip Code:');
      cy.get(':nth-child(7) > [align="right"]').should('have.text', 'Phone #:');
      cy.get(':nth-child(8) > [align="right"] > b').should('have.text', 'SSN:');
      cy.get(':nth-child(10) > [align="right"] > b').should('have.text', 'Username:');
      cy.get(':nth-child(11) > [align="right"] > b').should('have.text', 'Password:');
      cy.get(':nth-child(12) > [align="right"] > b').should('have.text', 'Confirm:');
      cy.get('[colspan="2"] > .button').should('have.value', 'Register');
      cy.get('[colspan="2"] > .button').should('be.visible');
      cy.get('[colspan="2"] > .button').should('be.enabled');
      cy.get('body').click();
      cy.get('#customer\\.firstName').should('be.enabled');
      cy.get('#customer\\.lastName').should('be.enabled');
      cy.get('#customer\\.address\\.street').should('be.enabled');
      cy.get('#customer\\.address\\.city').should('be.enabled');
      cy.get('#customer\\.address\\.state').should('be.enabled');
      cy.get('#customer\\.ssn').should('be.enabled');
      cy.get('#customer\\.username').should('be.enabled');
      cy.get('#customer\\.password').should('be.enabled');
      cy.get('#repeatedPassword').should('be.enabled');

    });

    it('Should Register without a phone number', function() 
{
 
  cy.get('#customer\\.firstName').clear('te');
  cy.get('#customer\\.firstName').type('test firstname');
  cy.get('#customer\\.lastName').clear('te');
  cy.get('#customer\\.lastName').type('test lastname');
  cy.get(':nth-child(3) > [width="20%"]').click();
  cy.get('#customer\\.address\\.street').clear('t');
  cy.get('#customer\\.address\\.street').type('test address');
  cy.get('#customer\\.address\\.city').clear('Test city');
  cy.get('#customer\\.address\\.city').type('Test city');
  cy.get('#customer\\.address\\.state').clear('Test state');
  cy.get('#customer\\.address\\.state').type('Test state');
  cy.get('#customer\\.address\\.zipCode').clear('so12 45f');
  cy.get('#customer\\.address\\.zipCode').type('so12 45f');
  cy.get('#customer\\.ssn').clear('128789');
  cy.get('#customer\\.ssn').type('128789');
  cy.get('#customer\\.username').clear('te');
  cy.get('#customer\\.username').type('222224'); //change
  cy.get('#customer\\.password').clear('t');
  cy.get('#customer\\.password').type('test');
  cy.get('#repeatedPassword').clear('te');
  cy.get('#repeatedPassword').type('test');
  cy.get('[colspan="2"] > .button').click();
  cy.get('#rightPanel > p').click();
  cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.');
  cy.get('.title').should('be.visible');
  cy.get('body').click();
  cy.get('.smallText').click();
  cy.get('.smallText').click();
  cy.get('body').click();
 
});

it('should display validation messages when the password and confirm password fields are mismatched.', function() 
{

cy.get('#customer\\.firstName').clear('J');
cy.get('#customer\\.firstName').type('Janet');
cy.get('.form2').click();
cy.get('#customer\\.lastName').clear('J');
cy.get('#customer\\.lastName').type('James John');
cy.get('#customer\\.address\\.street').clear('S');
cy.get('#customer\\.address\\.street').type('Street 1, near church road');
cy.get('#customer\\.address\\.city').clear('L');
cy.get('#customer\\.address\\.city').type('Leeds');
cy.get('#customer\\.address\\.state').clear('Y');
cy.get('#customer\\.address\\.state').type('York');
cy.get('#customer\\.address\\.zipCode').clear('L');
cy.get('#customer\\.address\\.zipCode').type('Ls25 647');
cy.get('#customer\\.phoneNumber').clear('1');
cy.get('#customer\\.phoneNumber').type('1245678901');
cy.get('#customer\\.ssn').clear('4');
cy.get('#customer\\.ssn').type('454666');
cy.get('#customer\\.username').clear('J');
cy.get('#customer\\.username').type('Janet');
cy.get('#customer\\.password').clear('J');
cy.get('#customer\\.password').type('Janet');
cy.get('#repeatedPassword').clear('J');
cy.get('#repeatedPassword').type('James');
cy.get('[colspan="2"] > .button').click();
cy.get('#repeatedPassword\\.errors').should('have.text', 'Passwords did not match.');

});
  
it('Should Validate empty form submission ', function() 
{

cy.get(':nth-child(1) > [align="right"] > b').should('have.text', 'First Name:');
cy.get(':nth-child(2) > [align="right"] > b').should('have.text', 'Last Name:');
cy.get(':nth-child(3) > [align="right"] > b').should('have.text', 'Address:');
cy.get(':nth-child(4) > [align="right"] > b').should('have.text', 'City:');
cy.get(':nth-child(5) > [align="right"] > b').should('have.text', 'State:');
cy.get(':nth-child(6) > [align="right"] > b').should('have.text', 'Zip Code:');
cy.get(':nth-child(7) > [align="right"] > b').should('have.text', 'Phone #:');
cy.get(':nth-child(8) > [align="right"] > b').should('have.text', 'SSN:');
cy.get(':nth-child(10) > [align="right"] > b').should('have.text', 'Username:');
cy.get(':nth-child(11) > [align="right"] > b').should('have.text', 'Password:');
cy.get(':nth-child(12) > [align="right"] > b').should('have.text', 'Confirm:');
cy.get('[colspan="2"] > .button').should('be.visible');
cy.get('[colspan="2"] > .button').click();
cy.get('#customer\\.firstName\\.errors').should('have.text', 'First name is required.');
cy.get('#customer\\.lastName\\.errors').should('have.text', 'Last name is required.');
cy.get('#customer\\.address\\.street\\.errors').should('have.text', 'Address is required.');
cy.get('#customer\\.address\\.state\\.errors').should('have.text', 'State is required.');
cy.get('#customer\\.address\\.zipCode\\.errors').should('have.text', 'Zip Code is required.');
cy.get('#customer\\.ssn\\.errors').should('have.text', 'Social Security Number is required.');
cy.get('#customer\\.username\\.errors').should('have.text', 'Username is required.');
cy.get('#customer\\.password\\.errors').should('have.text', 'Password is required.');
cy.get('#repeatedPassword\\.errors').should('have.text', 'Password confirmation is required.');

});


it('Should allow the user to register successfully', function() 
{

cy.get('#customer\\.firstName').clear('T');
cy.get('#customer\\.firstName').type('Tilcy');
cy.get('#customer\\.lastName').clear('T');
cy.get('#customer\\.lastName').type('Thomason');
cy.get(':nth-child(3) > [width="20%"]').click();
cy.get('#customer\\.address\\.street').clear('Street 1, near church road');
cy.get('#customer\\.address\\.street').type('Street 1, near church road');
cy.get('#customer\\.address\\.city').clear('Test city');
cy.get('#customer\\.address\\.city').type('Test city');
cy.get('#customer\\.address\\.state').clear('Test state');
cy.get('#customer\\.address\\.state').type('Test state');
cy.get(':nth-child(6) > [width="20%"]').click();
cy.get('#customer\\.address\\.zipCode').clear('Ls25 647');
cy.get('#customer\\.address\\.zipCode').type('Ls25 647');
cy.get('#customer\\.phoneNumber').clear('1245678901');
cy.get('#customer\\.phoneNumber').type('1245678901');
cy.get('#customer\\.ssn').clear('128789');
cy.get('#customer\\.ssn').type('128789');
cy.get('#customer\\.username').clear('T');
cy.get('#customer\\.username').type('Tilcv'); //change
cy.get('#customer\\.password').clear('T');
cy.get('#customer\\.password').type('Tilcv');//change
cy.get('#repeatedPassword').clear('T');
cy.get('#repeatedPassword').type('Tilcv');//change
cy.get('[colspan="2"] > .button').click();
cy.wait(1000);
cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.');
cy.get('.smallText').should('have.text', 'Welcome Tilcy Thomason');
cy.get('#leftPanel > ul > :nth-child(8) > a').should('have.text', 'Log Out');
cy.get('#leftPanel > ul > :nth-child(7) > a').should('have.text', 'Request Loan');
cy.get('#leftPanel > ul > :nth-child(6) > a').should('have.text', 'Update Contact Info');
cy.get('#leftPanel > ul > :nth-child(5) > a').should('have.text', 'Find Transactions');
cy.get('#leftPanel > ul > :nth-child(4) > a').should('have.text', 'Bill Pay');
cy.get('#leftPanel > ul > :nth-child(3) > a').should('have.text', 'Transfer Funds');
cy.get('#leftPanel > ul > :nth-child(2) > a').should('have.text', 'Accounts Overview');
cy.get('#leftPanel > ul > :nth-child(1) > a').should('have.text', 'Open New Account');
cy.contains('a', 'Log Out').click();


});

})

