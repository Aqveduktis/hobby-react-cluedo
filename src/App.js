import React from 'react'

import {Card} from './components/Card'
import {killers, weapons, rooms} from './components/killers'

export const App = () => {
  return (
    <div>
      <p>Find me in src/app.js!</p>
      <Card info = {killers[2]} />
      <Card info = {weapons[4]} />
      <Card info = {rooms[1]} />
    </div>
  )
}
