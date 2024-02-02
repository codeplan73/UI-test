import { useState } from 'react'
import './App.css'
import Tabs from './components/Tabs/Tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Ui Test Session</h1>
      <Tabs />
    </div>
  )
}

export default App
