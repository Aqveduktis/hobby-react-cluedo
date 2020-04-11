import React from 'react'

import './card.css'
export const Winning = ({info}) => {
  return (
      <article>
          <h1>You won!</h1>
            <p>{info.killer.name}</p>
      </article>
  )
}