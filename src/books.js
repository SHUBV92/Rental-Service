const cars = require("./carObject")

function Books(car) {
    this.car = car
    this.total = []
    this.cars = cars
}

Books.prototype = { 
    add: function(ele){
        this.total.push(this.car.collection[ele].name)
    },
    map: ()=>{
        this.cars.map(car =>(
            car.Make
        ))
    }

}