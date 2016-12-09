import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Container, Header, Menu } from 'semantic-ui-react'
import './Header.scss'

export const AppHeader = () => (
  <Container>
    <Header as='h1'>
      React Redux Starter Kit
    </Header>
    <Menu compact pointing secondary >
      <Menu.Item as={IndexLink} to='/' active={location.pathname === '/'}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to='/counter' active={location.pathname === '/counter'}>
        Counter
      </Menu.Item>
    </Menu>
  </Container>
)

export default AppHeader
