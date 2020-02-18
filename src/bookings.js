function Bookings (car, branch, user){
    this.car = car
    this.user = {name: "Shubs"}
    this.branch = branch 
    this.request = []
}

Bookings.prototype = {
    create:  function(){
        this.request.push({
            name: this.user.name
        })

    },

    date: function(){
        this.request[0].createdAt = new Date()
    }
}