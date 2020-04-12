import React from 'react'

import './card.css'
import { FrontCard } from './styling'
export const HiddenCard = ({title}) => {
  return (
      <FrontCard>
          <h1>{title}</h1>
      </FrontCard>
  )
}