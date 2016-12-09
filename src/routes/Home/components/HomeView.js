import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import { Header, Image } from 'semantic-ui-react'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <Header as='h4'>Welcome!</Header>
    <Image size='small'
      alt='This is a duck, because Redux!'
      src={DuckImage} />
  </div>
)

export default HomeView
