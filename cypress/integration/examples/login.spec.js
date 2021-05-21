 describe ('login spec',() => {
     it ('visit gallery app', () => {
        cy.visit ('https://gallery-app.vivifyideas.com')
    })

    it ('click login button', ()=> {
        cy.get ('a[class="nav-link nav-buttons"]').eq(0).click()
    })

    it ('enter user name', () => {
        cy.get ('input[id="email"]').type('dijana.vidovic73269@gmail.com')
    })

    it ('enter password', () => {
        cy.get ('input[id="password"]').type('test1111')
    })

    it ('click submit', () => {
            cy.get ('button[type="submit"]').click ()  
    })
})

 describe('logout', () =>{
         it ('click logout' , ()=> {
             cy.get('.ml-auto > :nth-child(3) > .nav-link').click();

        })
 })

 
