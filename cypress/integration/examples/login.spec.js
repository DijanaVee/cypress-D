/// <reference types="Cypress"/>

/*const locators=require ("../../fixtures/locators.json")
const faker=require ('faker');

describe ('login spec',() => {
     beforeEach (() =>{
         cy.visit ('')
         cy.get(locators.navigation.loginButton).click()
         
     })
//upisi faker-a!!!!!!!!
    it ('positive login', () => {
        cy.get(locators.loginPage.email).type('dijana.vidovic73269@gmail.com')
        cy.get(locators.loginPage.password).type('test1111')
        cy.get(locators.loginPage.submitButn).click()  
        cy.get(locators.navigation.logoutButton).click();

    })
})*/

const locators=require ("../../fixtures/locators.json")

import { authLogin} from '../../pageObjects/loginPage.js'

describe ('login spec',() => {
    beforeEach (() =>{
        cy.visit ('')
        cy.get(locators.navigation.loginButton).click()
        cy.url().should('include', '/login')
        cy.get(locators.loginPage.title).should('have.text', 'Please login')
        
    })

    it('negative case login / bad email', () => {
        cy.get(locators.loginPage.email).type(faker.internet.email())
        cy.get(locators.loginPage.password).type(faker.internet.password())
        cy.get(locators.loginPage.submitButn).click()
        cy.get(locators.loginPage.validationError).should('be.visile')
        cy.get(locators.loginPage.validationError).should('have,text', 'Bad Credentials')
        cy,get(locators.loginPage.validationError).should('have.css', 'background-color', 'rgb(248,215, 218)')

    })

   it ('login with valid credentials', () => {
       authLogin.login('dijana.vidovic79@gmail.com', 'DijanaV84')

    })

    it.only('login with valid credentials', () => {
        cy.intercept ('POST', 'https://gallery-api.vivifyideas.com/api/auth/login',(req) => {
    }).as ('validLogin')
        cy.get(locators.loginPage.email).type('dijana.vidovic79@gmail.com')
        cy.get(locators.loginPage.password).type ('DijanaV84')
        cy.get(locators.loginPage.submitButn).click()
        cy.wait('@validLogin').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(200)
        })
     })
 
  })