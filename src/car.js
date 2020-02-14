function Car(){
    this.collection = []
}

Car.prototype = {
    make: function(make, litres, year, group){
        this.collection.push({ name: make, engineSize: litres, Reg: year, Group: group })
    }


}