function Rental(car) {
    this.car = car
    this.rates = {
        City: null,
        Saloon: null,
        Luxury: null,
        Premium: null
    }

    this.contract = []
}
//Set Price per day for each car 
Rental.prototype = {
    price: function(City, Saloon, Luxury, Premium){
        this.rates.City = "£"+City
        this.rates.Saloon = "£"+Saloon
        this.rates.Luxury = "£"+Luxury
        this.rates.Premium = "£"+Premium
    },
    assign: function(id, days, group){
        this.contract.push({
            id: id,
            rentalDays:days, 
            group: group
        })
    },

    total: function(){

    },

    rentalperiod: function(number){
        this.contract[0].rentalDays = number+" "+"days"
    }

}