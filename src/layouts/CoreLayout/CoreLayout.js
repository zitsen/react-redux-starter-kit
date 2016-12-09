import React from 'react'
import Header from '../../components/Header'
import { Grid } from 'semantic-ui-react'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <Grid centered>
    <Grid.Row>
      <Header />
    </Grid.Row>
    <Grid.Row>
      {children}
    </Grid.Row>
  </Grid>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
