function Rental() {
    this.rates = {
        City: null,
        Saloon: null,
        Luxury: null,
        Premium: null
    }
}
Rental.prototype = {
    price: function(City, Saloon, Luxury, Premium){
        this.rates.City = "£"+City
        this.rates.Saloon = "£"+Saloon
        this.rates.Luxury = "£"+Luxury
        this.rates.Premium = "£"+Premium
    }
}