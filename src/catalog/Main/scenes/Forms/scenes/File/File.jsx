import React from 'react'
import Figma from 'catalog/components/Figma'
import FileNormal from './FileNormal/FileNormal'
import FileModifiers from './FileModifiers/FileModifiers'
import FileColors from './FileColors/FileColors'
import FileSizes from './FileSizes/FileSizes'
import FileAlignment from './FileAlignment/FileAlignment'

const File = () => (
  <div>
    <h2>File</h2>
    <Figma nodeId="4%253A200" />
    <FileNormal />
    <FileModifiers />
    <FileColors />
    <FileSizes />
    <FileAlignment />
  </div>
)

export default File
