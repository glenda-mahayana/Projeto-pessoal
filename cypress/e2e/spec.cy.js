describe('Test Case 01', () => {

  it('Acessando a home da pagina automation exercise', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.contains('Automation');
    cy.get('h1');
    cy.get('h1').contains('Automation');
  })

  it('Usuario e senha invalidos', () => {
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.contains('Login to your account');
   // cy.get('.login-form').find('input[name = "email"]');
    cy.get('[data-qa="login-email"]').type('testqa@test.com');
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"').contains('Login').click();
    cy.contains('Your email or password is incorrect!');

  });

  it.only('Validação de API usando intercept ', () => {
    cy.request('GET', 'api/productsList').should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).not.to.be.empty;
      let body = JSON.parse(response.body);
      expect(body.products).to.be.an('array');
      expect(body.products).to.have.length.above(1);
    });
  });

})
