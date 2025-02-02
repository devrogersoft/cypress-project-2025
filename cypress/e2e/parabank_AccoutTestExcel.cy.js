describe('Test suite for account creation Page from Excel file', () => 
    {
        beforeEach(()=>{
          cy.visit('https://parabank.parasoft.com/parabank/lookup.htm');
        }) 
          
                  
    it('Should be able to create new savings account from excel file', () => {
    
        cy.readUserInfoFromXlsx('cypress\\fixtures\\TestDataExcel.xlsx').then((data) => {
            data.forEach((user) => {
                cy.get('#customer\\.firstName').type(user.firstname);
                cy.get('#customer\\.lastName').type(user.lastname);
                cy.get('#customer\\.address\\.street').type(user.street);
                cy.get('#customer\\.address\\.city').type(user.city);
                cy.get('#customer\\.address\\.state').type(user.state);
                cy.get('#customer\\.address\\.zipCode').type(user.zip);
                cy.get('#customer\\.phoneNumber').type(user.phone);
                cy.get('#customer\\.ssn').type(user.ssn);
                cy.get('#customer\\.username').type(user.username);
                cy.get('#customer\\.password').type(user.password);
                cy.get('#repeatedPassword').type(user.password);
                cy.get('[colspan="2"] > .button').click();
                cy.wait(1000);
                cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.');
            })
        })
    })
})