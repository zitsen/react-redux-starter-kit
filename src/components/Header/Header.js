import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Grid, Row, Divider, Menu, MenuItem } from 'semantic-react'

export const Header = () => (
  <Grid centered={ true } container={ true }>
    <Row><h1>React Redux Starter Kit</h1></Row>
    <Row>
    <Menu className="compact basic" text={ true }>
      <MenuItem component={IndexLink} to="/" className="header">
        Home
      </MenuItem>
      <MenuItem component={ Link } to='/counter'>
        Counter
      </MenuItem>
    </Menu>
    </Row>
  </Grid>
)

export default Header
