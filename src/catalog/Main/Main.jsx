import React from 'react'
import { Route } from 'react-router-dom'

import Home from './scenes/Home'
import GettingStarted from './scenes/GettingStarted'
import Components from './scenes/Components'

import './Main.scss'

const Main = () => (
  <main className="ct-main">
    <Route path="/" exact component={Home} />
    <Route path="/getting-started" component={GettingStarted} />
    <Route path="/components" component={Components} />
  </main>
)

export default Main
