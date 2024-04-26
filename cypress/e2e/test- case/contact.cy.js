describe('verify the contact us form',function(){


beforeEach(function(){
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name ="first_name"]').type("pallavi")
    cy.get('[name ="last_name"]').type("jagtap")
    cy.get('[name ="email"]').type("pallavijon290197@gmail.com")
    cy.get('[name ="message"]').type("I am learning js")
})

it('verify the submit form',function(){
    cy.get('input[type= "submit"]').click()
    cy.get('h1').should('have.text',"Thank You for your Message!")
})
it('verify the reset functionality',function(){
    cy.get('input[type="reset"]').click()
    cy.get('[name="first_name"]').should('have.text',"")
})
afterEach(function(){
    cy.clearAllCookies()
})

})