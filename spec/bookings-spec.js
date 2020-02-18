describe("Bookings", function(){

var bookings

    beforeEach(function(){
        bookings = new Bookings()
    })

    describe("Recieve Booking", function(){
        it("Allows to receive a Booking ",function(){
            bookings.create()
            var date = bookings.date()
            expect(bookings.request).toEqual({ name: "shubs", createdAt: date })
        })
    })



});