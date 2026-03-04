describe('Test Case 01', () => {

  it('Acessando a home da pagina automation exercise', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.contains('Automation');
    cy.get('h1');
    cy.get('h1').contains('Automation');
  })

})

