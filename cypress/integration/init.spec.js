it('visits the Start page', () => {
  cy.visit('/')
  cy.get('div').should('be.visible')
})

it('visits the Home page', () => {
  cy.visit('/home')
  cy.get('#headerNavigation')
  cy.get('#screenContainer')
  cy.get('#keypadContainer')
  cy.get('#historyContainer')
  cy.get('#controlPanelContainer')
})

describe('Header module', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check Header', () => {
    cy.visit('/')
    cy.get('h1').should('be.visible')
      .contains('Calculator App')
    cy.get('#headerNavigation')
      .should('be.visible')
    cy.get('svg').should('be.visible')
  })
})

describe('Navigation module', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check Navigation', () => {
    cy.get('#headerNavigation')
      .should('be.visible')
      .contains('Home')

    cy.get('#headerNavigation')
      .should('be.visible')
      .contains('Settings')
  })
})

describe('Screen module', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check Screen', () => {
    cy.get('#screenContainer')
      .should('be.visible')
  })
})

describe('Keypad module', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check Keypad', () => {
    cy.get('#keypadContainer')
      .should('be.visible')
  })
})

describe('History module', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check History', () => {
    cy.get('#historyContainer')
      .should('be.visible')
      .contains('History')
  })
})

describe('Control panel module', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check Control panel', () => {
    cy.get('#controlPanelContainer')
      .should('be.visible')
  })
})

it('visits the Settings page', () => {
  cy.visit('/settings')
  cy.get('#settingsContainer')
  cy.get('#selectContainer')
})

describe('Settings module', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })

  it('it check Settings module', () => {
    cy.get('#settingsContainer')
      .should('be.visible')
      .contains('h3', 'Settings')

    cy.get('#settingsContainer')
      .should('be.visible')
      .contains('h4', 'Switch theme')

    cy.get('#settingsContainer')
      .should('be.visible')
      .contains('button', 'Clear all history')
  })
})

describe('Select module', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })

  const themes = {
    light: 'Light theme',
    colored: 'Colored theme',
    dark: 'Dark theme',
  }

  it('it check Select module', () => {
    cy.get('#selectContainer')
      .should('be.visible')
      .contains('select', `${themes.light}`)
  })
})
