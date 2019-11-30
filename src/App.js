import React from 'react'
import {HashRouter} from 'react-router-dom';
import Menu from './components/layout/Menu';
import Main from './components/layout/Main'

function App () {
  return (
    <HashRouter>
      <Menu></Menu>
      <Main></Main>
    </HashRouter>
  )
}

export default App
