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

    it('2 - Get booking by id First Name', () => {
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

    it.only('3 - Get booking by id', () => {
        cy.request({
            method: 'GET',
            url:'/booking/1',
            headers: {'Accept': 'application/json'}
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.status).to.have.property('content-type', 'application/json; charset=utf-8');
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('firstname').and.to.be.a('string');
            expect(response.body).to.have.property('lastname').and.to.be.a('string');
            expect(response.body).to.have.property('totalprice').and.to.be.a('number');
            expect(response.body).to.have.property('depositpaid').and.to.be.a('boolean');
            expect(response.body).to.have.property('bookingdates').and.to.be.a('object');
            expect(response.body.bookingdates).to.have.property('checkin').and.to.be.a('string');
            expect(response.body.bookingdates).to.have.property('checkout').and.to.be.a('string');
        })
    })
});