import React from 'react'
import Test from './components/Test'
import { Button } from 'antd'
import logo from './logo.svg'
import styles from './App.less'

function App () {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
            and save to reload.
        </p>
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </div>
        <div>
          <Test />
        </div>
      </header>
    </div>
  )
}

export default App
