import React from 'react'
import { Route } from 'react-router-dom'

import Checkbox from './scenes/Checkbox'
import File from './scenes/File'
import General from './scenes/General'
import Input from './scenes/Input'
import Radio from './scenes/Radio'
import Select from './scenes/Select'
import Textarea from './scenes/Textarea'

const Forms = ({ match }) => (
  <>
    <h1>Forms</h1>
    <iframe
      id="formId"
      title="form"
      width="800"
      height="450"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNTIGdJacxKH3DHRkomttIFv%2FEvoliCSS%3Fnode-id%3D0%253A1"
    />
    <Route path={match.path + '/checkbox'} component={Checkbox} />
    <Route path={match.path + '/file'} component={File} />
    <Route path={match.path + '/general'} component={General} />
    <Route path={match.path + '/input'} component={Input} />
    <Route path={match.path + '/radio'} component={Radio} />
    <Route path={match.path + '/select'} component={Select} />
    <Route path={match.path + '/textarea'} component={Textarea} />
  </>
)

export default Forms
