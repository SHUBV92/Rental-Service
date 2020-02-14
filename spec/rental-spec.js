describe("Rental", function(){
var rental 

    beforeEach(function(){
        rental = new Rental();
    });

    describe("Rental Contracts", function(){

        it("Sets the price for a given rental", function(){
            rental.price(10, 30, 50, 150)
            expect(rental.rates).toEqual({City:"£10", 
            Saloon: "£30", Luxury: "£50", Premium: "£150"
            });
        });

        it("Creates a new Contract", function(){
            
            rental.price(10, 30, 50, 150) 
            rental.assign(10, rental.rates.Luxury)
            expect(rental.contract[0]).toEqual({rentalDays: 10, 
            group: '£50'
            });
        });

        it("Shows the collection of cars ", function(){

        });
    });
});


