import React from 'react'
import InputStatesNormal from './InputStatesNormal/InputStatesNormal'
import InputStatesHover from './InputStatesHover/InputStatesHover'
import InputStatesFocus from './InputStatesFocus/InputStatesFocus'
import InputStatesLoading from './InputStatesLoading/InputStatesLoading'
import InputStatesDisabled from './InputStatesDisabled/InputStatesDisabled'
import InputStatesReadOnly from './InputStatesReadOnly/InputStatesReadOnly'
import InputStatesStatic from './InputStatesStatic/InputStatesStatic'

const InputStates = () => (
  <div>
    <h3>States</h3>
    <InputStatesNormal />
    <InputStatesHover />
    <InputStatesFocus />
    <InputStatesLoading />
    <InputStatesDisabled />
    <InputStatesReadOnly />
    <InputStatesStatic />
  </div>
)

export default InputStates
