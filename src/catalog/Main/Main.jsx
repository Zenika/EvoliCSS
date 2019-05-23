import React from 'react'
import { Route } from 'react-router-dom'

import Home from './scenes/Home'
import Overview from './scenes/Overview'
import Modifiers from './scenes/Modifiers'
import Element from './scenes/Element'
import Columns from './scenes/Columns'
import Forms from './scenes/Forms'
import Components from './scenes/Components'

import './Main.scss'

const Main = () => (
  <main className="ct-main">
    <Route path="/" exact component={Home} />
    <Route path="/overview" component={Overview} />
    <Route path="/modifiers" component={Modifiers} />
    <Route path="/element" component={Element} />
    <Route path="/columns" component={Columns} />
    <Route path="/forms" component={Forms} />
    <Route path="/components" component={Components} />
  </main>
)

export default Main
