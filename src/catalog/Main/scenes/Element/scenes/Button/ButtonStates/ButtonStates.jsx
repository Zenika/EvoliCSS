import React from 'react'
import ButtonStatesNormal from './ButtonStatesNormal/ButtonStatesNormal'
import ButtonStatesHover from './ButtonStatesHover/ButtonStatesHover'
import ButtonStatesFocus from './ButtonStatesFocus/ButtonStatesFocus'
import ButtonStatesActive from './ButtonStatesActive/ButtonStatesActive'
import ButtonStatesLoading from './ButtonStatesLoading/ButtonStatesLoading'
import ButtonStatesStatic from './ButtonStatesStatic/ButtonStatesStatic'
import ButtonStatesDisabled from './ButtonStatesDisabled/ButtonStatesDisabled'
import ButtonStatesIcons from './ButtonStatesIcons/ButtonStatesIcons'

const ButtonStates = () => (
  <div>
    <h3>States</h3>
    <ButtonStatesNormal />
    <ButtonStatesHover />
    <ButtonStatesFocus />
    <ButtonStatesActive />
    <ButtonStatesLoading />
    <ButtonStatesStatic />
    <ButtonStatesDisabled />
    <ButtonStatesIcons />
  </div>
)

export default ButtonStates
