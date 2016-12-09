import React from 'react'
import { AppHeader } from 'components/Header/Header'
// import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'
// import { Menu } from 'semantic-ui-react'

describe('(Component) AppHeader', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<AppHeader />)
  })

  it('Renders a welcome message', () => {
    _wrapper.find('Header').shallow()
      .should.contain.text('React Redux Starter Kit')
  })

  describe('Navigation links...', () => {
    it('Should render a Link to Home route', () => {
      _wrapper.find('MenuItem').first().shallow()
        .find('IndexLink').shallow()
        .find('Link').shallow()
        .should.contain.text('Home')
    })

    it('Should render a Link to Counter route', () => {
      _wrapper.find('MenuItem').last().shallow()
        .find('Link').shallow()
        .should.contain.text('Counter')
    })
  })
})
