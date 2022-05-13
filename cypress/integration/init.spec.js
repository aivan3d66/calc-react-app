describe('Pages', () => {
  it('visits the Start page', () => {
    cy
      .visit('/')
      .get('#headerNavigation').should('be.visible')
  })

  it('visits the Home page', () => {
    cy
      .visit('/home')
      .get('#headerNavigation').should('be.visible')
      .get('#screenContainer').should('be.visible')
      .get('#keypadContainer').should('be.visible')
      .get('#historyContainer').should('be.visible')
      .get('#controlPanelContainer').should('be.visible')
  })

  it('visits the Settings page', () => {
    cy
      .visit('/settings')
      .get('#headerNavigation').should('be.visible')
      .get('#settingsContainer').should('be.visible')
      .get('#selectContainer').should('be.visible')
  })
})

describe('Header module', () => {
  it('it check Header', () => {
    cy.visit('/')
    cy.get('h1').should('be.visible').contains('Calculator App')
    cy.get('#headerNavigation').should('be.visible')
  })
})

describe('Navigation module', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('it check Navigation /home', () => {
    cy
      .get('#headerNavigation a').contains('a', 'Home').click()
      .url().should('include', '/home')
  })

  it('it check Navigation /setting', () => {
    cy
      .get('#headerNavigation a').contains('a', 'Settings').click()
      .url().should('include', '/settings')
  })
})

describe('Screen module', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check screen changes', () => {
    cy
      .get('#screenContainer').should('be.empty')
      .get('#keypadContainer').contains('button', '1').click()

    cy
      .get('#screenContainer').should('have.text', '1')
  })
})

describe('Keypad module', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check Keypad', () => {
    cy.get('#keypadContainer button').should($b => {
      expect($b).to.have.length(21)
      expect($b.eq(0)).to.contain('C')
      expect($b.eq(1)).to.contain('7')
      expect($b.eq(2)).to.contain('8')
      expect($b.eq(3)).to.contain('9')
      expect($b.eq(4)).to.contain('*')
      expect($b.eq(5)).to.contain('-')
      expect($b.eq(6)).to.contain('4')
      expect($b.eq(7)).to.contain('5')
      expect($b.eq(8)).to.contain('6')
      expect($b.eq(9)).to.contain('/')
      expect($b.eq(10)).to.contain('+')
      expect($b.eq(11)).to.contain('1')
      expect($b.eq(12)).to.contain('2')
      expect($b.eq(13)).to.contain('3')
      expect($b.eq(14)).to.contain('=')
      expect($b.eq(15)).to.contain('.')
      expect($b.eq(16)).to.contain('(')
      expect($b.eq(17)).to.contain('0')
      expect($b.eq(18)).to.contain(')')
      expect($b.eq(19)).to.contain('CE')
      expect($b.eq(20)).to.contain('%')
    })
  })
})

describe('History module', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check history list', () => {
    cy
      .get('#historyContainer ul').should('be.empty')
      .get('#keypadContainer').contains('button', '2').click()
      .get('#keypadContainer').contains('button', '+').click()
      .get('#keypadContainer').contains('button', '2').click()
      .get('#keypadContainer').contains('button', '=').click()
      .get('#historyContainer ul').contains('li', '2+2')
  })
})

describe('Control panel module', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check the control panel btn', () => {
    cy
      .get('#historyContainer').should('be.visible')
      .get('#controlPanelContainer button').should('have.text', 'Hide history')
      .get('#controlPanelContainer button').click()
      .get('#controlPanelContainer button').should('have.text', 'Show history')
      .get('#historyContainer').should('not.be.visible')
  })
})

describe('Select module', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })

  const themes = ['Light theme', 'Colored theme', 'Dark theme']

  it('it check Select module', () => {
    cy
      .get('#selectContainer option')
      .contains(themes[0])
      .should('be.checked')

    cy
      .get('select').select(themes[1])
      .get('#selectContainer option')
      .contains(themes[1])
      .should('be.checked')

    cy.get('#selectContainer option')
      .then($options => {
        return Cypress._.map($options, $option => $option.innerHTML)
      })
      .should('deep.equal', ['Light theme', 'Colored theme', 'Dark theme'])
  })
})
