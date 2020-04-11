import React from 'react'

import './card.css'
export const Card = ({info}) => {
  return (
      <article className = "article" style = {{backgroundColor: info.color }}>
          <image scr = {info.image} />
          <h1>{info.name}</h1>
        <p>{info.description}</p>
      </article>
  )
}