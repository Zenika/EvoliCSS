import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from './Sidebar'
import Main from './Main'

import './styles/index.scss'

const App = () => (
  <Router>
    <div className='container'>
      <Sidebar/>
      <Main/>
    </div>
  </Router>
)

export default App
