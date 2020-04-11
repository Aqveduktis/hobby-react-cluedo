import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {Card} from './Card'
import {HiddenCard} from './HiddenCard'
import {killers, weapons, rooms} from './killers'

import './card.css'
export const Game = () => {

    const [clicked, setClicked] = useState(false)
    const [tapped, setTapped] = useState(false)
  return (
      <div>
    <p>Find me in src/app.js!</p>
    <div onClick={(()=>setTapped(true))}>
    {tapped ? <Card info = {weapons[4]} /> : <HiddenCard title="killer" /> }
    </div>
    <Card info = {killers[2]} />
    {clicked ? <Card info = {weapons[4]} /> : <HiddenCard /> }
    <Card info = {rooms[1]} />
    <button onClick={(()=>setClicked(true))}>set True</button>
    <Link to={`/winning`}>
            <h2>Reveal crime</h2>
          </Link>
  </div>
  )
}