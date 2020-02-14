describe("Books", function(){

    let books
        
        beforeEach(function(){
            car = new Car();
            books = new Books(car);
        })
    
        it("Can display the books (Cars)", function(){
            car.make("BMW")
            books.add(0)
            car.make("Mercedes")
            books.add(1)
            expect(books.total[0]).toEqual("BMW")
            expect(books.total[1]).toEqual("Mercedes")
        });
    
    });