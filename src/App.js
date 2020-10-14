import React from 'react'
import NavBar from './components/NavBar'
import Main from './components/screens/Main'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Characters from './components/screens/Characters'
import Switch from 'react-bootstrap/esm/Switch'

function App() {
  return (
    <Router>
      <NavBar />
      <Main />
      <Switch>
        <Route path='/characters' component={Characters} />
      </Switch>
    </Router>
  )
}

export default App
