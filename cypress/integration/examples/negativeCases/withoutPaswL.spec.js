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

   

   it ('click submit', () => {
           cy.get ('button[type="submit"]').click ()  
   })
})



