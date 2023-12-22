import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Chai from './chai'

function App() {
  const username = "Nobody"
  return (
    <>
      <Chai />
      <h1>Chai Aur Code {username}</h1>
    </>
  );
}

export default App;