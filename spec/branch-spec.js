describe("Branch", function() {
var branch
  
  beforeEach(function(){
    branch = new Branch();
  });

  describe("Branch", function(){

    it("Branch allows to store cars" , function(){
      branch.store(1)
      expect(branch.books).toEqual([1])
    });

    it("Branch allows to rent cars", function(){
      branch.store(1)
      branch.store(1)
      branch.rent(1)
      expect(branch.books.length).toEqual(1)
    });

    it("Contract shows how many a car has been rented for", function(){
      branch.rentalperiod(3)
      expect(branch.contract).toEqual({days:"3 days"})
    });
    

  });

})