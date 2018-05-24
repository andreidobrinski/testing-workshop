/* globals cy */
describe('calculator', () => {
  it('can visit the app', () => {
    cy
      .visit('/')
      .getByText(/^1$/)
      .click()
      .getByText(/^\+$/)
      .click()
      .getByText(/^2$/)
      .click()
      .getByText(/^=$/)
      .click()
      .getByTestId('number-display')
      // for cleanup, use forEach instead of afterEach
      // is something breaks, you want to see the state of the DOM when it broke
      // cypress lets you revisit the DOM at every stage of the tests
      // cypress can be configured to get info from the redux store at a given state
      // cypress can be used for unit tests as well
  })
})
