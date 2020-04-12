import React from 'react'
import {Link} from 'react-router-dom'

import './card.css'
export const Winning = ({game, setGame}) => {
  return (
      <article>
          <h1>You won!</h1>
          <p>{game.killer.name}</p>
          <button onClick={(()=>setGame({killer:"" , weapon:"", room:""}))}>
         <Link to={'/'}>go home</Link>
         </button>
      </article>
  )
}