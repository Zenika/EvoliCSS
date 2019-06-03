import React from 'react'
import Figma from 'catalog/components/Figma'
import ProgressBarsNormal from './ProgressBarsNormal/ProgressBarsNormal'
import ProgressBarsColors from './ProgressBarsColors/ProgressBarsColors'
import ProgressBarsSizes from './ProgressBarsSizes/ProgressBarsSizes'
import ProgressBarsIndeterminate from './ProgressBarsIndeterminate/ProgressBarsIndeterminate'

const ProgressBars = () => (
  <div>
    <h2>Progress bars</h2>
    <Figma nodeId="4%253A180" />
    <ProgressBarsNormal />
    <ProgressBarsColors />
    <ProgressBarsSizes />
    <ProgressBarsIndeterminate />
  </div>
)

export default ProgressBars
