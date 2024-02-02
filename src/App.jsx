import { useState } from 'react'
import './App.css'
import Tabs from './components/Tabs/Tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Tabs />
    </div>
  )
}

export default App
