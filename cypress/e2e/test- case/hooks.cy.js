// test suite
// testcases 

before(function(){
    cy.log(" i will run at the first")
})

after(function(){
    cy.log("i will run ai last")
})

beforeEach(function(){
    cy.log(" i will run before each testcases")
})

afterEach(function(){
    cy.log("i will run after every testcases")
})
it('test case one',function(){
    cy.log("Test case one pass")
})
it('test case two',function(){
    cy.log("test case two ")
})
