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
Rental.prototype = {
    // Set List Price per day for each car 
    price: function(City, Saloon, Luxury, Premium){
        this.rates.City = City
        this.rates.Saloon = Saloon
        this.rates.Luxury = Luxury
        this.rates.Premium = Premium
    },
    // Creates the Rental Contract
    assign: function(id, days, group){
        this.contract.push({
            id: id,
            rentalDays:days, 
            group: group
        })
    },

    total: function(ele, group){
        if(group === "Luxury"){
        this.contract[ele].total = this.rates.Luxury * 
        this.contract[ele].rentalDays
        }
    },

    rentalperiod: function(number){
        this.contract[0].rentalDays = number+" "+"days"
    }

}