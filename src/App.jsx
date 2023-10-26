import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import data from './Data/data.json'
import PreNav from './Components/PreNav'
import Nav from './Components/Nav'
import Slider from './Components/Slider'
import Offers from './Components/Offers'
import Heading from './Components/Heading'
import StarProduct from './Components/StarProduct'
import HotAccessoriesMenu from './Components/HotAccessoriesMenu'
import HotAccessories from './Components/HotAccessories'
import ProductReviews from './Components/ProductReviews'
import Footer from './Components/Footer'
import NavOptions from './Components/NavOptions'

function App() {
  return (
    <Router>
      <PreNav />
      <Nav />

      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text={'STAR PRODUCTS'} />
      <StarProduct starProduct={data.starProduct} />
      <Heading text={'HOT ACCESSORIES'} />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          exact
          path='/music'
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />

        <Route
          exact
          path='/smartDevice'
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />

        <Route
          exact
          path='/home'
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />

        <Route
          exact
          path='/lifestyle'
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />

        <Route
          exact
          path='/mobileAccessories'
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>

      <Heading text={' PRODUCT REVIEWS'} />
      <ProductReviews productReviews={data.productReviews} />
      <Footer footer={data.footer} />
    </Router>
  )
}

export default App
