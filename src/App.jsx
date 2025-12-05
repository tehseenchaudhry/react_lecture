import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import NotFound from './Pages/Error404'
import SingleProduct from './Pages/SingleProduct'
import Team from './Pages/Team'
import AishaKhan from './Pages/Ayesha'
import FatimaChaudhry from './Pages/Fatima'
import Protected from './Pages/Protected'
import Contact from './Pages/Contact'
import Dashboard from './Dashboard/Dashboard'
import DashboardSidebar from './Dashboard/SIdebarDashboard'
import DashboardMain from './Dashboard/SIdebarDashboard'
import UserPage from './Dashboard/UserPage'
import AnalyticsPage from './Dashboard/AnalyticsPage'
import SettingsPage from './Dashboard/SettingPage'
import UseReducerHook from './Components/Hooks/UseReducerHook'
import Counter from './Components/Context/Counter'
import DarkTheme from './Pages/DarkTheme'
import UseRef from './Components/Hooks/UseRef'
import WeatherApi from './API/WeatherApi'
import ReduxCounter from './Pages/ReduxCounter'
import Eproduct from './Components/Ecommerce/Eproduct'
import ESingleProduct from './Components/Ecommerce/EsingleProduct'
import ENavbar from './Components/Ecommerce/Enavbar'
import BillItem from './Components/Ecommerce/EBill'
import SearchCity from './RTK_data/SearchCity'
import SwiperJS from './swiper/SwiperJS'
// import UseEffectHook from './Components/Hooks/UseEffectHook'

const App = () => {

  // const name = "Tahseen"

  // console.log(name);


  const obj = {
    name: "Tahseen",
    age: 24,
    address: "Bwp"
  }

  // obj.name = "Fatima"

  // console.log(obj);

  // let mini = obj.name

  // Assignment Operator

  // 10 = x

  // x = 10

  const { name, age } = obj



  return (
    <div>
      {/* <h1 className='text-3xl font-semibold text-blue-500'>Hello My Name is {name} {age}</h1> */}

      {/* <UseStateHook/> */}
      {/* <UseForm/>
      <UseData/> */}

      {/* <Navbar name="Tahseen" age="23" />
      <UseRef/> */}

      {/* <UseEffectHook/> */}

      <BrowserRouter>
        {/* <Navbar /> */}
        <ENavbar />

        <Routes>
          <Route path='/' element={<Protected Component={Home} />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/reduxCounter' element={<ReduxCounter />} />
          <Route path='/eproduct' element={<Eproduct />} />
          <Route path='/rtkcity' element={<SearchCity />} />
          <Route path='/eproduct/:id' element={<ESingleProduct />} />
          <Route path='/swiper' element={<SwiperJS />} />
          <Route path='/cart' element={<BillItem/>}/>
          <Route path='/api' element={<WeatherApi />} />
          <Route path='/dark' element={<DarkTheme />} />
          <Route path='/useref' element={<UseRef />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/reducer' element={<UseReducerHook />} />
          <Route path='/dashboard' element={<Dashboard />}>

            <Route index element={<DashboardMain />} />
            <Route path='user' element={<UserPage />} />
            <Route path='analytics' element={<AnalyticsPage />} />
            <Route path='settings' element={<SettingsPage />} />

          </Route>
          <Route path='/team' element={<Team />}>

            <Route path='1' element={<AishaKhan />} />
            <Route path='4' element={<FatimaChaudhry />} />

          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}




export default App