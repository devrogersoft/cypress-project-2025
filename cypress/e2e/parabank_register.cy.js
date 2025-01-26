describe('Test suite for register feature', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  })

  it('Verify the register form UI elements', function () {

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
    cy.screenshot();
  });

  it('Should Register without a phone number', function () {


    // cy.get('#customer\\.username').type(Math.floor(Math.random()*10000)); //to provide random numbers
    //cy.get('#customer\\.username').type('TestAswat'+Math.floor(Math.random()*10000));//to provide random alpha numeric values
     cy.fixture('register_users').then((data) => {

      data.userinfo.forEach((user) => {
      cy.get('#customer\\.firstName').type(user.firstname);
      cy.get('#customer\\.lastName').type(user.lastname);
      cy.get(':nth-child(3) > [width="20%"]').click();
      cy.get('#customer\\.address\\.street').type(user.street);
      cy.get('#customer\\.address\\.city').type(user.city);
      cy.get('#customer\\.address\\.state').type(user.state);
      cy.get('#customer\\.address\\.zipCode').type(user.zip);
      cy.get('#customer\\.ssn').type(user.ssn);
      cy.get('#customer\\.username').type(user.username);
      cy.get('#customer\\.password').type(user.password);
      cy.get('#repeatedPassword').type(user.repeatpassword)
      cy.get('[colspan="2"] > .button').click();
      cy.get('#rightPanel > p').click();
      cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.');
      cy.get('.title').should('be.visible');
      cy.get('body').click();
      cy.get('.smallText').click();
      cy.contains('a', 'Log Out').click();
      cy.get('#loginPanel > :nth-child(3) > a').click();
      cy.screenshot();
      });
    });

  });

  it('should display validation messages when the password and confirm password fields are mismatched.', function () {
    cy.fixture('register_users').then((data) => {

      data.passwordconfirmnotmatch.forEach((user) => {

        cy.get('#customer\\.firstName').type(user.firstname);
        cy.get('.form2').click();
        cy.get('#customer\\.lastName').type(user.lastname);
        cy.get('#customer\\.address\\.street').type(user.street);
        cy.get('#customer\\.address\\.city').type(user.city);
        cy.get('#customer\\.address\\.state').type(user.state);
        cy.get('#customer\\.address\\.zipCode').type(user.zip);
        cy.get('#customer\\.phoneNumber').type(user.phone);
        cy.get('#customer\\.ssn').type(user.ssn);
        cy.get('#customer\\.username').type(user.username);
        cy.get('#customer\\.password').type(user.password);
        cy.get('#repeatedPassword').type(user.repeatpassword);
        cy.get('[colspan="2"] > .button').click();
        cy.get('#repeatedPassword\\.errors').should('have.text', 'Passwords did not match.');
        cy.screenshot();
      });
    });
  });

  it('Should Validate empty form submission ', function () {

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
    cy.screenshot();
 
});

  it('Should allow the user to register successfully', function () {

    cy.fixture('register_users').then((data) => {

      data.validregister.forEach((user) => {
    cy.get('#customer\\.firstName').type(user.firstname);
    cy.get('#customer\\.lastName').type(user.lastname);
    cy.get(':nth-child(3) > [width="20%"]').click();
    cy.get('#customer\\.address\\.street').type(user.street);
    cy.get('#customer\\.address\\.city').type(user.city);
    cy.get('#customer\\.address\\.state').type(user.state);
    cy.get(':nth-child(6) > [width="20%"]').click();
    cy.get('#customer\\.address\\.zipCode').type(user.zip);
    cy.get('#customer\\.phoneNumber').type(user.phone);
    cy.get('#customer\\.ssn').type(user.ssn);
    cy.get('#customer\\.username').type(user.username); //change
    cy.get('#customer\\.password').type(user.password);//change
    cy.get('#repeatedPassword').type(user.repeatpassword);//change
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
    cy.screenshot();

  });

})
  });

});