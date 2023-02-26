import { useState } from 'react'
import ChessBoard from './ChessBoard'
import './App.css'

function App() {
  const [theme, setTheme] = useState(false)

  return (
    <div className="App">
    <h1>SuperChess</h1>
      <ChessBoard />
    </div>
  )
}

export default App

