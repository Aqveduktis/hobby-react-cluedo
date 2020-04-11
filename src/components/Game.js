import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {Card} from './Card'
import {HiddenCard} from './HiddenCard'
import {killers, weapons, rooms} from './killers'

import './card.css'
export const Game = () => {

    const [clicked, setClicked] = useState(false)
    const [tapped, setTapped] = useState(false)
    const [killer, setKiller] = useState({})
    const [weapon, setWeapon] = useState({})
    const [room, setRoom] = useState({})

    const handleKiller = () => {
        setKiller(choosing(killers))
    }

    const handleWeapon = () => {
        setWeapon(choosing(weapons))
    }
    const handleRoom = () => {
        setRoom(choosing(rooms))
    }
  return (
      <div>

    <div onClick={handleKiller}>
    {killer ? <Card info = {killer} /> : <HiddenCard title="killer" /> }
    </div>
    <div onClick={handleWeapon}>
    {killer ? <Card info = {weapon} /> : <HiddenCard title="weapon" /> }
    </div>
    <div onClick={handleRoom}>
    {killer ? <Card info = {room} /> : <HiddenCard title="room" /> }
    </div>

    <Link to={`/winning`}>
            <h2>Reveal crime</h2>
          </Link>
  </div>
  )
}
const choosing = (array) => {
    const number = Math.floor(Math.random()*array.length)
    return array[number]

}