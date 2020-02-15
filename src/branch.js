function Branch (){
    this.books = []
    this.contract = {days: null}
}

Branch.prototype = { 
    store: function(cars){
        this.books.push(cars)
    },

    rent: function(cars){
        this.books.splice(cars)
    },
    

}