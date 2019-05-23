import React from 'react'
import { Route } from 'react-router-dom'
import Figma from 'catalog/components/Figma'

import Classes from './scenes/Classes'
import Colors from './scenes/Colors'
import Functions from './scenes/Functions'
import Mixins from './scenes/Mixins'
import Modularity from './scenes/Modularity'
import Responsiveness from './scenes/Responsiveness'
import Start from './scenes/Start'

const Overview = ({ match }) => (
  <>
    <h1>Overview</h1>
    <Figma nodeId="0%253A1" />
    <Route path={match.path + '/classes'} component={Classes} />
    <Route path={match.path + '/colors'} component={Colors} />
    <Route path={match.path + '/functions'} component={Functions} />
    <Route path={match.path + '/mixins'} component={Mixins} />
    <Route path={match.path + '/modularity'} component={Modularity} />
    <Route path={match.path + '/responsiveness'} component={Responsiveness} />
    <Route path={match.path + '/start'} component={Start} />
  </>
)

export default Overview
