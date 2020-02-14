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
            })
        });

        it("Show daily rates for each car", function(){
            
            expect(rental.rates).toEqual("£50")            
        })
    });

});