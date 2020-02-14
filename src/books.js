function Books(car) {
    this.car = car
    this.total = []
}

Books.prototype = { 
    add: function(ele){
        this.total.push(this.car.collection[ele].name)
    },

}