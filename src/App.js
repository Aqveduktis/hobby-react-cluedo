import React, { useState } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import {Game} from 'components/Game'
import {Winning} from 'components/Winning'
export const App = () => {

  return (
   
    <BrowserRouter>
    <div className = "app">
        <Switch>
            <Route path="/" exact>
              <Game />
          </Route>
          <Route path="/winning" exact>
            <Winning />
          </Route>
      </Switch>
      </div>
    </BrowserRouter>


  )
}
