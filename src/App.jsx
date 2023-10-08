import './App.css'
import PreNav from './Components/PreNav'
import Nav from './Components/Nav'
import Slider from './Components/Slider'
import { BrowserRouter as Router } from 'react-router-dom'
import data from './Data/data.json'

function App() {
  return (
    <Router>
      <PreNav />
      <Nav />
      <Slider start={data.banner.start} />
    </Router>
  )
}

export default App
