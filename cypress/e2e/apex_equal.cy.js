/*
I put the page objects in here just to show that I'm familiar with the concept(s). Ideally, you'd keep them in a seperate folder, but for this example, probably easier to do it this way.
*/

const pageObjects = {
  url: 'https://equaldev.apexsystems.com/',
  emailInputField: '[id="filled-basic"]',
  emailSubmitButton: '[id="emailsubmit"]'
}

// Made 2 tests to show how they could be formatted. Added a beforeEach() so they can each start with a clean slate when visiting the site.
describe('Apex E-Qual Test Automation Project', () => {
  beforeEach(() => {
    cy.visit(pageObjects.url)
  })
    it('Test 1: Inputs a valid email in the input field', () => {
      cy.get(pageObjects.emailInputField).type('shaun.foran@gmail.com')
      cy.get(pageObjects.emailSubmitButton).click()
      cy.reload()
    })
    it('Test 2: Runs through the rest of the test steps', () => {
      cy.get('[data-testid="WbSunnyIcon"]').click()
      cy.get('[id="filled-basic"]').type('shaun_foran@outlook.com')
      cy.get('[id="emailsubmit"]').click()
      cy.get('[id="practice-area-select"]').select('QA:')
      cy.get('[id="practiceareasubmit"]').click()
      cy.get('button').contains('Automation').click({force: true})
      cy.get('button').contains('Test Automation Engineer/SDET').click({force: true})
      cy.get('[id="projectInfo1"]').type('2 manual testers and 1 automation engineer')
      cy.get('[data-testid="Brightness3Icon"]').click()
      cy.get('[id="saveProjectDataSubmit"]').click()
      cy.get('button').contains('Start Over').click({force: true})
    })
  })