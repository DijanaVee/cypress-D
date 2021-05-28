class CreateGallery {
 
    get createGallery () {
        return cy.get('.mr-auto > :nth-child(3) > .nav-link')
    }

    get title (){
        return cy.get ('#title')

    }

    get description (){
        return cy.get ('#description')
    }

    get url () {
        return cy.get ('.input-group > .form-control')
    }

    get addImage (){
        return cy.get('form > :nth-child(3) > :nth-child(3)')
    }

    get submitButton (){
        return cy.get ('form > :nth-child(4)')
    }
}

export const createGallery = new CreateGallery()