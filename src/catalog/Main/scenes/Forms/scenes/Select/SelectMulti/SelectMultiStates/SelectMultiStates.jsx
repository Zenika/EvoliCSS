import React from 'react'
import SelectMultiStatesNormal from './SelectMultiStatesNormal/SelectMultiStatesNormal'
import SelectMultiStatesHover from './SelectMultiStatesHover/SelectMultiStatesHover'
import SelectMultiStatesFocus from './SelectMultiStatesFocus/SelectMultiStatesFocus'
import SelectMultiStatesLoading from './SelectMultiStatesLoading/SelectMultiStatesLoading'
import SelectMultiStatesIcons from './SelectMultiStatesIcons/SelectMultiStatesIcons'

const SelectMultiStates = () => (
  <div>
    <h3>States</h3>
    <SelectMultiStatesNormal />
    <SelectMultiStatesHover />
    <SelectMultiStatesFocus />
    <SelectMultiStatesLoading />
    <SelectMultiStatesIcons />
  </div>
)

export default SelectMultiStates
