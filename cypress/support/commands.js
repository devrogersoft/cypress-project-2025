const XLSX = require('xlsx');

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


Cypress.Commands.add('readUserInfoFromXlsx', (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet);
    return jsonData;
});
Cypress.Commands.add('userRegistration', (myRandomValue) => {
    const randomUsername = 'user' + myRandomValue;
    const randomPassword = 'password' + myRandomValue;

    return cy.fixture('register_users').then((data) => {
        data.validregister.forEach((user) => {
            const randomFirstName = user.firstname+ ""+ myRandomValue;
            const randomLastName = user.lastname+ ""+ myRandomValue;      
            // Use dynamically generated random username and password
            cy.get('#customer\\.firstName').type(randomFirstName);
            cy.get('#customer\\.lastName').type(randomLastName);
            cy.get('#customer\\.address\\.street').type(user.street+ ""+ myRandomValue);
            cy.get('#customer\\.address\\.city').type(user.city+ ""+ myRandomValue);
            cy.get('#customer\\.address\\.state').type(user.state+ ""+ myRandomValue);
            cy.get('#customer\\.address\\.zipCode').type(user.zip+ ""+ myRandomValue);
            cy.get('#customer\\.phoneNumber').type(user.phone+ ""+ myRandomValue);
            cy.get('#customer\\.ssn').type(user.ssn+ ""+ myRandomValue);
            cy.get('#customer\\.username').type(randomUsername); // Use random username
            cy.get('#customer\\.password').type(randomPassword); // Use random password
            cy.get('#repeatedPassword').type(randomPassword); // Use the same random password for repeat
            cy.get('[colspan="2"] > .button').click();
            cy.wait(1000);
            cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.');
            cy.get('.smallText').should('have.text', 'Welcome ' +randomFirstName+ ' ' + randomLastName);
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
    });
})
