describe('getting started', () => {
  
  it('visit page', () => {
    cy.visit('https://easyrmstorage.z6.web.core.windows.net/')
    // close welcome popup
    cy.get('#popup > #close').click()
    
  })

  it('help site', () => {
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('#helpPopup > h2').should('be.visible')
    cy.get('#helpPopup > #close').click()
  })
})

describe('work area', () => {
  it('upload', () => {
    cy.get(':nth-child(1) > .nav-link').click().readFile('cypress/fixtures/easyrm.json')

  })


  it('safe', () => {
    cy.get(':nth-child(2) > .nav-link').should('not.be.disabled')
  })
})

describe('export', () => {
  it('PDF', () => {
    cy.get('#navbarDropdownMenuLink').click()
    cy.get('.dropdown-menu').contains('to PDF').should('not.be.disabled').click()

  })

  it('PNG', () => {
    cy.get('#navbarDropdownMenuLink').click()
    cy.get('.dropdown-menu').contains('to PNG').should('not.be.disabled').click()
  })

  it('SVG', () => {
    cy.get('#navbarDropdownMenuLink').click()
    cy.get('.dropdown-menu').contains('to SVG').should('not.be.disabled').click()
  })
})

describe('finish', () => {
  it('convert into code', () => {
    cy.get('.btn').click()
    cy.get('.col-10 > h2').should('not.be.empty')
  })

  it('back to start', () => {
    cy.get('.col > #close').should('not.be.disabled').click()
  })
})