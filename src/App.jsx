
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './styles/style.css'
import './styles/reset.css'

import Header from './components/header/Header'
import Footer from "./components/footer/Footer"
import MainPage from "./pages/mainpage/MainPage"
import Catalog from "./pages/catalog/Catalog"

import GoodsItems from "./utils/items.json"
import GoodsItemPage from "./pages/goodsitempage/GoodsItemPage"
import Bag from "./pages/bag/Bag"


import { Provider } from "react-redux"
import store from "./store/store"
import Faq from "./pages/faq/Faq"
import Login from "./pages/login/Login"
import Registration from "./pages/registration/Registration"
import Reviews from "./pages/reviews/Reviews"

import ScrtollToTop from "./utils/scrollToTop"

function App() {


  return (
    <div className="app">
      <div className="wrapper">
        <Router>
          <ScrtollToTop />
          <Provider store={store}>
            <Header />
            <Routes>
              <Route path="snake-shop-deploy/" element={<MainPage />} />
              <Route path="snake-shop-deploy/catalog" element={<Catalog />} />
              {GoodsItems.map((item) => {
                return <Route key={item.id} path={`snake-shop-deploy/${item.id}`} element={<GoodsItemPage item={item} />} />
              })}
              <Route path="snake-shop-deploy/bag" element={<Bag />} />
              <Route path="snake-shop-deploy/FAQ" element={<Faq />} />
              <Route path="snake-shop-deploy/login" element={<Login />} />
              <Route path="snake-shop-deploy/registr" element={<Registration />} />
              <Route path="snake-shop-deploy/reviews" element={<Reviews />} />
            </Routes>
            <Footer />
          </Provider>
        </Router>
      </div>
    </div>
  )
}

export default App
