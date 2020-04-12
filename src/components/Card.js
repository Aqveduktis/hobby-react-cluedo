import React from 'react'

import './card.css'
import { FrontCard } from './styling'
export const Card = ({info}) => {
  return (
    <FrontCard color={info.color}>
          <image scr = {info.image} />
          <h1>{info.name}</h1>
        <p>{info.description}</p>
      
      </FrontCard>
  )
}