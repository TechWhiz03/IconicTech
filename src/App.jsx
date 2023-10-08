import './App.css'
import PreNav from './Components/PreNav'
import Nav from './Components/Nav'
import Slider from './Components/Slider'
import Offers from './Components/Offers'
import Heading from './Components/Heading'
import { BrowserRouter as Router } from 'react-router-dom'
import data from './Data/data.json'

function App() {
  return (
    <Router>
      <PreNav />
      <Nav />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text={'STAR PRODUCTS'} />
    </Router>
  )
}

export default App
