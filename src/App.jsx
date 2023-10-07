import './App.css'
import PreNav from './Components/PreNav'
import Nav from './Components/Nav'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <PreNav />
      <Nav />
    </Router>
  )
}

export default App
