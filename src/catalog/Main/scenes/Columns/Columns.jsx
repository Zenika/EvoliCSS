import React from 'react'
import { Route } from 'react-router-dom'

import Basics from './scenes/Basics'
import Gap from './scenes/Gap'
import Nesting from './scenes/Nesting'
import Options from './scenes/Options'
import Responsiveness from './scenes/Responsiveness'
import Sizes from './scenes/Sizes'

const Columns = ({ match }) => (
  <>
    <h1>Columns</h1>
    <iframe
      id="formId"
      title="form"
      width="800"
      height="450"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNTIGdJacxKH3DHRkomttIFv%2FEvoliCSS%3Fnode-id%3D4%253A95"
    />
    <Route path={match.path + '/basics'} component={Basics} />
    <Route path={match.path + '/gap'} component={Gap} />
    <Route path={match.path + '/nesting'} component={Nesting} />
    <Route path={match.path + '/options'} component={Options} />
    <Route path={match.path + '/responsiveness'} component={Responsiveness} />
    <Route path={match.path + '/sizes'} component={Sizes} />
  </>
)

export default Columns
