//import { it } from 'mocha';
//import { createGallery} from '../pageObjects/createGallery.js'
import { authLogin } from '../pageObjects/loginPage.js'
const locators =require ("../fixtures/locators.json")
const faker=require ('faker');

/*
describe ('create gallery',() => {
    before (() =>{
        cy.visit ('')
        cy.get(locators.navigation.loginButton).click()
        authLogin.login('dijana.vidovic79@gmail.com', 'DijanaV84')
        cy.get('.mr-auto > :nth-child(3) > .nav-link').click()
        
    })

   it ('create gllery', () => {
       cy.get (locators.createGallery.title).type ('bla bla')
       cy.get (locators.createGallery.description).type('nesto')
       cy.get (locators.createGallery.url).type('http://staffmobility.eu/sites/default/files/isewtweetbg.jpg')
       cy.get (locators.createGallery.addImage).click ()
  })
*/

describe ('create gallery',() => {
    before (() =>{
        cy.visit ('')

    })
 it('visit gallery', () => {
    cy.get(locators.navigation.loginButton).click()
    authLogin.login('andrija123@gmail.com', 'sifra123')
     cy.get(locators.navigation.loginButton).should('not.exist')
     cy.wait(2000)
 })

 it('negative createGallery', ()=> {
     
     cy.get('a[href="/create"]').click()
    cy.get (locators.createGallery.description).type('slika')
    cy.get (locators.createGallery.url).type("https://www.affordabledigitizing.com/wp-content/uploads/2020/10/Understanding-How-to-Convert-JPG-to-PES-1024x853.jpg")
    cy.get (locators.createGallery.addImage).click ()  
    cy.get (locators.createGallery.submitButtn).click ()  
    cy.get(locators.createGallery.error).should('have.text', 'Please fill out this field')
   })


})