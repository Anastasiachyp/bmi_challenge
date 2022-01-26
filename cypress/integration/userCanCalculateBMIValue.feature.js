describe('user can calculate BMI value based on individual measure', () => {

        describe('by filling in the form and clicking the button', () => {
            describe('as Anastasia', () => {
            beforeEach(() => {
                cy.visit('http://localhost:3474')
                cy.get('[data-cy=weight-input]').type('65')
                cy.get('[data-cy=height-input]').type('1.70')
                cy.get('[data-cy=calculate-button]').click()
            });
    
                it('is expected to display his BMI value', () => {
                    cy.get('[data-cy=results]').should('contain.text', "Your BMI value is 22.5")
            });
        });    
        });
      
    });