import React from 'react'

import { Route } from 'react-router-dom'

import Box from './scenes/Box'
import Button from './scenes/Button'
import Content from './scenes/Content'
import Delete from './scenes/Delete'
import Icon from './scenes/Icon'
import Image from './scenes/Image'
import Notification from './scenes/Notification'
import ProgressBars from './scenes/Progress-bars'
import Table from './scenes/Table'
import Tag from './scenes/Tag'
import Title from './scenes/Title'

const Element = ({ match }) => (
  <>
    <h1>Element</h1>
    <Route path={match.path + '/box'} component={Box} />
    <Route path={match.path + '/button'} component={Button} />
    <Route path={match.path + '/content'} component={Content} />
    <Route path={match.path + '/delete'} component={Delete} />
    <Route path={match.path + '/icon'} component={Icon} />
    <Route path={match.path + '/image'} component={Image} />
    <Route path={match.path + '/notification'} component={Notification} />
    <Route path={match.path + '/progress-bars'} component={ProgressBars} />
    <Route path={match.path + '/table'} component={Table} />
    <Route path={match.path + '/tag'} component={Tag} />
    <Route path={match.path + '/title'} component={Title} />
  </>
)

export default Element
