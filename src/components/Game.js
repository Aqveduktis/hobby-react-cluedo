import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {Card} from './Card'
import {HiddenCard} from './HiddenCard'
import {killers, weapons, rooms} from './killers'
import {Board, StyledButton} from './styling'
import './card.css'
export const Game = ({game, setGame}) => {

    const handleKiller = () => {
        setGame({killer:choosing(killers), weapon:game.weapon, room:game.room})
    }

    const handleWeapon = () => {
        setGame({killer:game.killer, weapon:choosing(weapons), room:game.room})
    }
    const handleRoom = () => {
        setGame({killer:game.killer, weapon:game.weapon, room:choosing(rooms)})
    }


  return (
      <>
      <Board>
        <div onClick={handleKiller}>
        {(game.killer !== "") ? <Card info = {game.killer} /> : <HiddenCard title="killer" /> }
        </div>
        <div onClick={handleWeapon}>
        {(game.weapon !== "" )? <Card info = {game.weapon} /> : <HiddenCard title="weapon" /> }
        </div>
        <div onClick={handleRoom}>
        {(game.room !== "" ) ? <Card info = {game.room} /> : <HiddenCard title="room" /> }
        </div>
      </Board>
      <StyledButton>
        <Link to={`/winning`}>
          <h2>Reveal crime</h2>
        </Link>
      </StyledButton>
  </>
  )
}
const choosing = (array) => {
    const number = Math.floor(Math.random()*array.length)
    return array[number]

}