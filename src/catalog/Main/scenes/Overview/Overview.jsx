import React from 'react'
import { Route } from 'react-router-dom'

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
    <iframe
      id="formId"
      title="form"
      width="800"
      height="450"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNTIGdJacxKH3DHRkomttIFv%2FEvoliCSS%3Fnode-id%3D0%253A1"
    />
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
