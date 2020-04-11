import React from 'react'

import './card.css'
export const HiddenCard = ({title}) => {
  return (
      <article className = "article">
          <h1>{title}</h1>
      </article>
  )
}