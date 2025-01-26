
describe('Test suite', () => 
    {
      beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      }) 
        

it('Should Validate empty form submission', function() 
{

  cy.get('h2').click();
  cy.get('h2').should('have.text', 'Customer Login');
  cy.get(':nth-child(1) > b').should('have.text', 'Username');
  cy.get(':nth-child(3) > b').should('have.text', 'Password');
  cy.get('body').click();
  cy.get(':nth-child(5) > .button').click();
  cy.get('.error').should('have.text', 'Please enter a username and password.');
   
});
 it('should check the user can login using username only',function()
 {
  
   cy.get(':nth-child(2) > .input').clear();
   cy.get(':nth-child(2) > .input').type('test');
   cy.get(':nth-child(5) > .button').click();
   cy.get('.error').should('have.text', 'Please enter a username and password.');
 
 });
    
 it('should check the user can login using password only',function()
 {
 
   cy.get(':nth-child(4) > .input').clear('t');
   cy.get(':nth-child(4) > .input').type('test');
   cy.get(':nth-child(5) > .button').click();
   cy.get('.error').should('have.text', 'Please enter a username and password.');
 
 });
 it('should check the user can login using invalid credentials',function() 
 {
 
   cy.get(':nth-child(4) > .input').clear('t');
   cy.get(':nth-child(2) > .input').type('7ugl');
   cy.get(':nth-child(4) > .input').type('tes.t7');
   cy.get(':nth-child(5) > .button').click();
   cy.get('.error').should('have.text', 'The username and password could not be verified.');
 
 });
 it('should Verify the UI elements of login page',function()
 {
  
   cy.get('h2').should('have.text', 'Customer Login');
   cy.get('h2').should('be.visible');
   cy.get(':nth-child(1) > b').should('have.text', 'Username');
   cy.get(':nth-child(2) > .input').should('be.enabled');
   cy.get(':nth-child(3) > b').should('have.text', 'Password');
   cy.get(':nth-child(4) > .input').should('be.enabled');
   cy.get(':nth-child(5) > .button').should('be.visible');
   cy.get('#loginPanel > :nth-child(2) > a').should('have.text', 'Forgot login info?');
   
 });
 it('should check the user can login using valid credentials',function() 
 {
 
   cy.get(':nth-child(4) > .input').clear('t');
   cy.get(':nth-child(2) > .input').type('Tilcll');
   cy.get(':nth-child(4) > .input').type('Tilcll');
   cy.get(':nth-child(5) > .button').click();
   cy.contains('Welcome').should('be.visible');

 
 });
  })

