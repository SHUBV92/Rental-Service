function Car(){
    this.collection = []
}

Car.prototype = {
    make: function(make, litres, year){
        this.collection.push({name: make, engineSize: litres, Reg: year })
    }


}