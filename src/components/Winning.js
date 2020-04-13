import React from 'react'
import {Link} from 'react-router-dom'

import './card.css'
import { StyledButton } from './styling'
export const Winning = ({game, setGame}) => {
  return (
      <article>
          <h1>You won!</h1>
          <p>{`${game.killer.name} murdered the victim with the ${game.weapon.name} in the ${game.room.name}`}</p>
          <Link style={{width:'100%', height:'100%'}} to={'/'}>
          <StyledButton onClick={(()=>setGame({killer:"" , weapon:"", room:""}))}>
         go home
         </StyledButton>
         </Link>
      
      </article>
  )
}