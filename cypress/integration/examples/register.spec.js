describe ('login spec',() => {
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
})