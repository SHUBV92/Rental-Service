describe("Rental", function(){
var rental 

    beforeEach(function(){
        rental = new Rental();
    });

    describe("Rental Contracts", function(){

        it("Sets a daily price to a rental list", function(){
            rental.price(10, 30, 50, 150)
            expect(rental.rates).toEqual({
                City:10, 
                Saloon: 30,
                Luxury: 50,
                Premium: 150
            });
        });

        it("Creates a new Contract", function(){
            rental.price(10, 30, 50, 150) 
            rental.assign(1, 10, rental.rates.Luxury)
            expect(rental.contract[0]).toEqual({
                id: 1, 
                rentalDays: 10, 
                group: 50
            });
        });

        it("Gives a total price of the rental days", function(){
            rental.price(10, 30, 50, 150) 
            rental.assign(1, 10, rental.rates.Luxury)            
            rental.assign(2, 5, rental.rates.Premium)            
            rental.total(0, "Luxury")
            expect(rental.contract[0].total).toEqual(500)
        });

        it("Can Overwrite the rental Days", function(){
            rental.assign(1, 10, rental.rates.Luxury)
            rental.rentalperiod(3)
            expect(rental.contract[0].rentalDays).toEqual("3 days")
          });
          
    });
});


