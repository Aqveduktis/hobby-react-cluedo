import React from 'react'
import {Link} from 'react-router-dom'

import './card.css'
import { StyledButton } from './styling'
export const Winning = ({game, setGame}) => {
  return (
      <article>
          <h1>You won!</h1>
          <p>{game.killer.name}</p>
          <StyledButton onClick={(()=>setGame({killer:"" , weapon:"", room:""}))}>
         <Link style={{width:'100%', height:'100%'}} to={'/'}>go home</Link>
         </StyledButton>
      
      </article>
  )
}