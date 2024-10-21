
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './pages/home/home'
import AllProducts from './pages/home/allProducts'
import ProductDetail from './pages/home/productDetails'
import UserLayout from './components/userLayout'
import UserProfile from './pages/users/profile'
import UserProduct from './pages/users/products'
import Layout from './components/layout'
import SignIn from './pages/auth/SignIn'

import { app } from './firebase/firebase'
import './App.css'
import LogIn from './components/LogIn'

import SignUp from './components/SignUp'

function App() {


  return (


<BrowserRouter>
      <Routes>
        <Route path='/signIn' element={<SignIn/>}/>
        {/* <Route path='/Login' element={<LogIn/>}/>
        <Route path='/Signup' element={<SignUp/>}/> */}

        <Route path='/' element={<><Layout></Layout></>}>
          <Route index element={<Home />} />
          <Route path='products' element={<AllProducts />} />
          <Route path='products/:id' element={<ProductDetail />} />
        </Route>
        <Route path='/user' element={<><UserLayout/> </>}>
          <Route path='profile' element={<UserProfile />} />
          <Route path='products' element={<UserProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  


  )
}

export default App
