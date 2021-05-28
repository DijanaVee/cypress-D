/*describe ('login spec',() => {
    it ('visit gallery app', () => {
       cy.visit ('')
   })
   it ('click register button', ()=> {
    cy.get (':nth-child(2) > .nav-link').eq(0).click()
})

it ('enter first name', () => {
    cy.get ('#first-name').type('Didijana')
})

it ('enter last name', () => {
    cy.get ('#last-name').type('Vidiovic')
})

it ('enter user name', () => {
    cy.get ('#email').type('dijana.vidovi2rrrr69@gmail.com')
})

it ('enter password', () => {
    cy.get ('#password').type('test11221222')
})

it ('enter confirmed password', () => {
    cy.get ('#password-confirmation').type('test11221222')
})

it ('check input', () => {
    cy.get ('.form-check-input').click ()  
})

it ('click submit', () => {
        cy.get ('button[type="submit"]').click ()  
})
})*/

const locators=require ("../../fixtures/locators.json")
const faker=require ('faker');

let userData= {
    randomName: faker.name.findName(),
    randomLastName:faker.name.lastName(),
    randomEmail:faker.internet.email(),
    randomPassword:faker.internet.password()
}
describe ('login spec',() => {
    beforeEach (() =>{
        cy.visit ('')
        cy.get (locators.navigation.registerButton).eq(0).click()
    })
//    it ('positive register', ()=> {
//     cy.get (locators.registerPage.userName).type(faker.name.firstName())
//     cy.get (locators.registerPage.userLastname).type(faker.name.lastName())
//     cy.get (locators.registerPage.email).type(faker.internet.email())
//     cy.get (locators.registerPage.password).type(userData.randomPassword)
//     cy.get (locators.registerPage.confirmPassword).type(userData.randomPassword)
//     cy.get (locators.registerPage.checkInput).click ()  
//     cy.get (locators.registerPage.submitButtn).click ()  
//    })

   it ('negative register', ()=> {
    cy.get (locators.registerPage.userName).type('dada')
    cy.get (locators.registerPage.userLastname).type('dada')
    cy.get (locators.registerPage.email).type("dsdaeda@gmail")
    cy.get (locators.registerPage.password).type('12345678')
    cy.get (locators.registerPage.confirmPassword).type('12345678')
    cy.get (locators.registerPage.checkInput).click ()  
    cy.get (locators.registerPage.submitButtn).click ()  
    cy.get(locators.registerPage.error).should('have.text', 'The email must be a valid email address.')
   })

   it ('negative register-wrong pasword', ()=> {
    cy.get (locators.registerPage.userName).type('dada')
    cy.get (locators.registerPage.userLastname).type('dada')
    cy.get (locators.registerPage.email).type("dsdaeda@gmail.com")
    cy.get (locators.registerPage.password).type('1')
    cy.get (locators.registerPage.confirmPassword).type('1')
    cy.get (locators.registerPage.checkInput).click ()  
    cy.get (locators.registerPage.submitButtn).click ()  
    cy.get(locators.registerPage.error).should('have.text', 'The password must be at least 8 characters.')
   })

   it ('negative register-no check', ()=> {
    cy.get (locators.registerPage.userName).type('dada')
    cy.get (locators.registerPage.userLastname).type('dada')
    cy.get (locators.registerPage.email).type("dsdaeda@gmail.com")
    cy.get (locators.registerPage.password).type('12345678')
    cy.get (locators.registerPage.confirmPassword).type('12345678')
     
    cy.get (locators.registerPage.submitButtn).click ()  
    cy.get(locators.registerPage.error).should('have.text', 'The terms and conditions must be accepted.')
   })

   
})
