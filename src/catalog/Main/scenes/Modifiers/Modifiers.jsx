import React from 'react'
import { Route } from 'react-router-dom'

import ColorHelpers from './scenes/Color-helpers'
import Helpers from './scenes/Helpers'
import ResponsiveHelpers from './scenes/Responsive-helpers'
import Syntax from './scenes/Syntax'
import TypographyHelpers from './scenes/Typography-helpers'

const Modifiers = ({ match }) => (
  <>
    <h1>Modifiers</h1>
    <Route path={match.path + '/color-helpers'} component={ColorHelpers} />
    <Route path={match.path + '/helpers'} component={Helpers} />
    <Route path={match.path + '/responsive-helpers'} component={ResponsiveHelpers} />
    <Route path={match.path + '/syntax'} component={Syntax} />
    <Route path={match.path + '/typography-helpers'} component={TypographyHelpers} />
  </>
)

export default Modifiers
