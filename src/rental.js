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
    assign: function(days, group){
        this.contract.push({
            rentalDays:days, 
            group: group
        })
    },

}