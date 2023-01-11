import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import {  } from './styled/styled.module'
import Allroute from './components/Allroute'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Allroute />
    </>
  )
}

export default App
