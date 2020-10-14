import React, { useEffect, useState } from 'react'

const Characters = () => {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    fetch(
      'http://comicvine.gamespot.com/api/characters/?api_key=dfd789127bb2039a7679e6ce4666a5e0217407c4&format=json&sort=name'
    ).then(({ character }) => this.setState({ character: setCharacter }))
  }, [])

  return (
    <div>
      <h1>Characters</h1>
    </div>
  )
}

export default Characters
