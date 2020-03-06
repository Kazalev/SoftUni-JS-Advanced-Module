const { expect } = require('chai');
//const { beforeEach } = require('mocha');
const BookStore = require('../02. Book Store_Ресурси.js');

// console.log(BookStore); //test

describe('BookStore tests', function(){
    let store;
    beforeEach(function(){
        store = new BookStore('SoftUni');
    });

    describe('constructor tests', function(){
        it('should initialize properties correctly', function(){
            expect(store.name).to.equal('SoftUni');
            expect(store.books).to.deep.equal([]);
            expect(store.workers).to.deep.equal([]);
        });
    });

    describe('stockBooks() tests', function(){
        it('should push correctly', function(){
            //Arrange
            const expectedBook = { 
                title: "Book1",
                author: "Author1"
            };

            //Act
            store.stockBooks(['Book1-Author1']);

            //Assert
            expect(store.books.length).to.equal(1);
            expect(store.books[0]).to.deep.equal(expectedBook);
        });
    });

    describe('hire() tests', function(){
        it('should throw error', function(){
            store.hire('Kiril', 'Trainer');

            const hire = () => store.hire('Kiril', 'Trainer');

            expect(hire).to.throw(Error, `This person is our employee`);
        });

        it('should hire person', function(){
            const worker =  {
                name: 'Kiril',
                position: 'Trainer',
                booksSold: 0
            };

            const outputMsg = store.hire('Kiril', 'Trainer');

            expect(store.workers.length).to.equal(1);
            expect(outputMsg).to.equal(`Kiril started work at SoftUni as Trainer`);
            expect(store.workers[0]).to.deep.equal(worker);
        });
    });

    describe('fire() tests', function(){
        it('should throw error', function(){
            const fire = () => store.fire('Pesho');

            expect(fire).to.throw(Error, `Pesho doesn't work here`);
        });

        it('should fire a person', function(){
            store.hire('Pesho', 'Bookstore Cashier');

            const outputMsg = store.fire('Pesho');

            expect(outputMsg).to.equal('Pesho is fired');
            expect(store.workers.length).to.equal(0);
        });
    });

    describe('sellBook() tests', function(){
        it('should throw error (book not found)', function(){
           const sellBook = () => store.sellBook('Book1', 'Worker');

           expect(sellBook).to.throw(Error, 'This book is out of stock');
        });

        it('should throw error (worker not found)', function(){
            store.stockBooks([' Book1-Author1 ']);

            const sellBook = () => store.sellBook('Book1', 'Worker');
           
           expect(sellBook).to.throw(Error, 'Worker is not working here');
        });

        it('should sell book correctly', function(){
            store.stockBooks([ 'Book1-Author1' ]);
            store.hire('Pesho', 'Cashier');

            store.sellBook('Book1', 'Pesho');

            expect(store.workers[0].booksSold).to.equal(1);
            expect(store.books.length).to.equal(0);
        });
    });

    describe('printWorkers() test', function(){
        it('should print correctly', function(){
            store.hire('Pesho', 'Cashier');

            const expectedMsg = store.printWorkers();

            expect(expectedMsg).to.equal(`Name:Pesho Position:Cashier BooksSold:0`);
        });
    });
});