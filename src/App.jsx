import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Demo1 from './Demo1'
import Controlled from './controlled/Controlled'
import Controlled1 from './controlled/Controlled1'
import Demo10 from './uncontrolled/Demo10'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <div>
      {/* <Home/> */}
      {/* <Demo1/> */}
      {/* <Controlled/> */}
      {/* <Controlled1/> */}

      <Demo10/>

     </div>
  )
}

export default App
