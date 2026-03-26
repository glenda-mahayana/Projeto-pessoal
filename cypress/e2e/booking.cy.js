describe('Test Suit - Booking API Testing', () => {
    it('1 - Get all bookings ids', () => {
        cy.request({
          method: 'GET',
          url:'/booking',
          headers: {'Content-Type': 'application/json'}
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body).to.have.lengthOf.at.least(1);
            expect(response.body[0]).to.have.property('bookingid');
        })
    });

    it.only('2 - Get booking by id First Name', () => {
        cy.request({
          method: 'GET',
          url:'/booking',
          qs: {'firstname': 'test'},
          headers: {'Content-Type': 'application/json'}
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        })
    })
});