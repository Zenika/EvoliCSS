import React from 'react'
import { Route } from 'react-router-dom'
import Figma from 'catalog/components/Figma'

import Basics from './scenes/Basics'
import Gap from './scenes/Gap'
import Nesting from './scenes/Nesting'
import Options from './scenes/Options'
import Responsiveness from './scenes/Responsiveness'
import Sizes from './scenes/Sizes'

const Columns = ({ match }) => (
  <>
    <h1>Columns</h1>
    <Figma nodeId="4%253A95" />
    <Route path={match.path + '/basics'} component={Basics} />
    <Route path={match.path + '/gap'} component={Gap} />
    <Route path={match.path + '/nesting'} component={Nesting} />
    <Route path={match.path + '/options'} component={Options} />
    <Route path={match.path + '/responsiveness'} component={Responsiveness} />
    <Route path={match.path + '/sizes'} component={Sizes} />
  </>
)

export default Columns
