import React from 'react'
import Header from '../../components/Header'
import { Container } from 'semantic-react'

export const CoreLayout = ({ children }) => (
  <Container aligned="center">
    <Header />
    <Container>
      {children}
    </Container>
  </Container>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
