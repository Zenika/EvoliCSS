import React from 'react'
import SelectMultiNormal from './SelectMultiNormal/SelectMultiNormal'
import SelectMultiColors from './SelectMultiColors/SelectMultiColors'
import SelectMultiStyles from './SelectMultiStyles/SelectMultiStyles'
import SelectMultiSizes from './SelectMultiSizes/SelectMultiSizes'
import SelectMultiStates from './SelectMultiStates/SelectMultiStates'

const SelectMulti = () => (
  <div>
    <h2>Multi</h2>
    <SelectMultiNormal />
    <SelectMultiColors />
    <SelectMultiStyles />
    <SelectMultiSizes />
    <SelectMultiStates />
  </div>
)

export default SelectMulti
