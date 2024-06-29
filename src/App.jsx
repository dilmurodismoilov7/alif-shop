import './index.css'
import Navbar from './projectparts/navbar/navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Basket from './pages/basket.jsx'
import Like from './pages/like.jsx'
import Avtr from './pages/avtr.jsx'
import Header from './projectparts/header/header.jsx'
import Home from './projectparts/home/home.jsx'
import Products from './projectparts/products/products.jsx'
import { useState } from 'react'
function App() {
  const [data, setData] = useState([]);
  const [addToBasket, setAddToBasket] = useState(NaN);
  const [basket, setBasket] = useState(['hechnima']);
  console.log(basket);
  return (
    <>
      <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket basket={basket}/>}/>
        <Route path='/like' element={<Like/>}/>
        <Route path='/avtr' element={<Avtr/>}/>
      </Routes>
          <Products data={data} setData={setData} addToBasket={addToBasket} setAddToBasket={setAddToBasket} setBasket={setBasket}/>
      </div>
    </>
  )
}

export default App