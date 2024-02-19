describe('getting started', () => {
  
  it('visit page', () => {
    cy.visit('ProjectCode/html/EasyRM.html')
    // close welcome popup
    cy.get('#popup > .close').click()
    
  })

  it('help site', () => {
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('#helpPopup > h2').should('be.visible')
    cy.get('#helpPopup > .close').click()
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
    cy.get('#sql').click()
    cy.get('.col-10 > h2').should('not.be.empty')
  })

  it('back to start', () => {
    cy.get('#closeSQL').click()
  })
})

describe('erm to sql', () => {
  it('convert', () => {
    cy.get('#sql').click()
    cy.get('#export').click()
    cy.get('#nameFilePopup').should('not.be.disabled')
  })

  it('back to start', () => {
    cy.get('#closeNameFile').click()
    cy.get('#closeSQL').click()
  })
})

describe('popup background', () => {
  it('when popup opened background should be disabled', () => {
    cy.get('#sql').click()
    cy.get('#containerBackgroundForPopup').should('be.visible')
  })

  it('back to start', () => {
    cy.get('#closeSQL').click()
  })
})

describe('download', () => {
  it('sql', () => {
    cy.get('#sql').click()
    cy.get('#exportSQLCol > #export').click()
    cy.get('#fileName').type('secondSQL')
    cy.get('#downloadSQL').click()
    cy.readFile('C:/Users/Lisa/Downloads/secondSQL.sql')
  })

  it('back to start', () => {
    cy.get('#closeNameFile').click()
    cy.get('#closeSQL').click()
  })
});

describe('documentation', () => {
  it('githubrepository', () => {
    cy.get('#helpButton').click()
    cy.get('#githublink').click()
    cy.url()
  })
})

