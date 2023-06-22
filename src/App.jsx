
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

function App() {


  return (
    <div className="app">
      <div className="wrapper">
        <Router>
          <Provider store={store}>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="catalog" element={<Catalog />} />
              {GoodsItems.map((item) => {
                return <Route key={item.id} path={`/${item.id}`} element={<GoodsItemPage item={item} />} />
              })}
              <Route path="bag" element={<Bag />} />
              <Route path="FAQ" element={<Faq />}/>
              <Route path="login" element={<Login />} />
              <Route path="registr" element={<Registration />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
            <Footer />
          </Provider>
        </Router>
      </div>
    </div>
  )
}

export default App
