import React from 'react'
import Figma from 'catalog/components/Figma'
import DeleteNormal from './DeleteNormal/DeleteNormal'
import DeleteSizes from './DeleteSizes/DeleteSizes'
import DeleteCombinations from './DeleteCombinations/DeleteCombinations'

const Delete = () => (
  <div>
    <h2>Delete</h2>
    <Figma nodeId="4%253A164" />
    <DeleteNormal />
    <DeleteSizes />
    <DeleteCombinations />
  </div>
)

export default Delete
