function Car(){
    this.company = "BMW",
    this.model = "I8"
    this.gears = [1,2,3,4,5,6],
    this.currentGear = 0,
    this.speed = 10
}



Car.prototype = {
    
    shiftGear: function(){
        if (this.company === "BMW") {
            return "Model"
        } else {
            return "You have entered a danger zone"
        }
    },

    Up: function(){
            this.currentGear += 1
        },
        
    down: function(){
            this.changeGear -= 1
        }
    
    }
