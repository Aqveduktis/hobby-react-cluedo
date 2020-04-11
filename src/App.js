import React, { useState } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import {Game} from 'components/Game'
import {Winning} from 'components/Winning'
export const App = () => {
  const [game, setGame] = useState({killer:"", weapon: "", room:""})

  return (
   
    <BrowserRouter>
    <div className = "app">
        <Switch>
            <Route path="/" exact>
              <Game game={game} setGame = {setGame} />
          </Route>
          <Route path="/winning" exact>
            <Winning info = {game} />
          </Route>
      </Switch>
      </div>
    </BrowserRouter>


  )
}
