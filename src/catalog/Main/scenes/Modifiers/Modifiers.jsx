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
    <iframe
      id="formId"
      title="form"
      width="800"
      height="450"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNTIGdJacxKH3DHRkomttIFv%2FEvoliCSS%3Fnode-id%3D4%253A91"
    />
    <Route path={match.path + '/color-helpers'} component={ColorHelpers} />
    <Route path={match.path + '/helpers'} component={Helpers} />
    <Route path={match.path + '/responsive-helpers'} component={ResponsiveHelpers} />
    <Route path={match.path + '/syntax'} component={Syntax} />
    <Route path={match.path + '/typography-helpers'} component={TypographyHelpers} />
  </>
)

export default Modifiers
