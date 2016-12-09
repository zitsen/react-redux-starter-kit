import React from 'react'
import { Button, Header } from 'semantic-ui-react'

export const Counter = (props) => (
  <div>
    <Header as='h2'>Counter: {props.counter}</Header>
    <Button onClick={props.increment}>
      Increment
    </Button>
    {' '}
    <Button onClick={props.doubleAsync}>
      Double (Async)
    </Button>
  </div>
)

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Counter
