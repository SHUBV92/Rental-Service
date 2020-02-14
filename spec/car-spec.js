describe("Car", function(){

let car 
    
    beforeEach(function(){
        car = new Car();
    })

    it("Can add a car name to the collection", function(){
        car.make("BMW", "2L", "2020", "Luxury")
        expect(car.collection[0]).toEqual({
            name: "BMW", engineSize: "2L", 
            Reg: "2020", Group:"Luxury"
        });
    });

    it("Can add a new car object into an array", function(){
        car.make("BMW")
        car.make("Mercedes")
        expect(car.collection[0].name).toEqual("BMW")
        expect(car.collection[1].name).toEqual("Mercedes")
    });

    it("Add car Descritpion", function(){
        car.make("BMW", "2L", "2020")
        expect(car.collection[0].Reg).toEqual("2020")
        expect(car.collection[0].engineSize).toEqual("2L")

    });

});



