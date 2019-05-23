import React from 'react'
import { Route } from 'react-router-dom'
import Figma from 'catalog/components/Figma'

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
    <Figma nodeId="4%253A96" />
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
