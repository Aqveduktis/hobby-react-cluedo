import React, { useState } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import {Game} from 'components/Game'
import {Winning} from 'components/Winning'
import {Page} from 'components/styling'



export const App = () => {
  const [game, setGame] = useState({killer:"", weapon: "", room:""})

  return (
   
    <BrowserRouter>
    <Page>
        <Switch>
            <Route path="/" exact>
              <Game game={game} setGame = {setGame} />
          </Route>
          <Route path="/winning" exact>
            <Winning game = {game} setGame={setGame} />
          </Route>
      </Switch>
      </Page>
    </BrowserRouter>


  )
}
