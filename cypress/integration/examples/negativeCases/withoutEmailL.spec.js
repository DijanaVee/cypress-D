describe ('login spec',() => {
    it ('visit gallery app', () => {
       cy.visit ('https://gallery-app.vivifyideas.com')
   })

   it ('click login button', ()=> {
       cy.get ('a[class="nav-link nav-buttons"]').eq(0).click()
   })

   

   it ('enter password', () => {
       cy.get ('input[id="password"]').type('test112212225')
   })

   it ('click submit', () => {
           cy.get ('button[type="submit"]').click ()  
   })
})



