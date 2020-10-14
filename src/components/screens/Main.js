import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to ComiX!</h1>
        <p>
          Your one stop shop for all things comics. Search for any information
          or tid-bits related to your favorite hero, villain or team.
        </p>
        <p>
          <Button variant='primary'>Find out more</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default Main
