import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Navbar from './components/navbar/Navbar'
import Typingapp from './components/typingcomp/Typingapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Typingapp/>
       
    </div>
  )
}

export default App
