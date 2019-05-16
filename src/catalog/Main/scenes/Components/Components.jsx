import React from 'react'
import { Route } from 'react-router-dom'

import Buttons from './scenes/Buttons'
import Colors from './scenes/Colors'

const Components = ({ match }) => (
  <>
    <h1>Components</h1>
    <Route path={match.path + '/buttons'} component={Buttons} />
    <Route path={match.path + '/colors'} component={Colors} />
  </>
)

export default Components
