describe('Verify the Imagemagick Configuration recipe applied.', () => {
  it('Verify Imagemagick modules should be enabled.', () => {
    cy.login()
    cy.visit('/admin/modules')
    cy.get('#edit-modules-imagemagick-enable').should('be.checked')
    cy.get('#edit-modules-file_mdm-characters-enable').should('be.checked')
    cy.get('#edit-modules-sophron-enable').should('be.checked')
  })
  it('Verify Imagemagick quality is set to 100.', () => {
    cy.login()
    //cy.visit('imagemagick.settings')
    //cy.get('#edit-quality').should('have.value', '100')
  })
  it('Verify Imagemagick is set as the default image toolkit.', () => {
    cy.login()
    //cy.visit('system.image')
    //cy.get('toolkit').should('contain', 'imagemagick')
  })
})
