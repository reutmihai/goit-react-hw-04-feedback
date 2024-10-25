import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <p>Feedback</p>
    </div>
  )
}

export default App
