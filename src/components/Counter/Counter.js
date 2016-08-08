import React from 'react'
import { Grid, Row, Button, Header, Label } from 'semantic-react'

export const Counter = (props) => (
  <Grid centered>
  <Row>
    <Header component="h2">
      Counter:
      {' '}
      <Label circular color="green">
        {props.counter}
      </Label>
    </Header>
    </Row>
    <Row>
    <Button onClick={props.increment}>
      Increment
    </Button>
    {' '}
    <Button onClick={props.doubleAsync}>
      Double (Async)
    </Button>
    </Row>
  </Grid>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
