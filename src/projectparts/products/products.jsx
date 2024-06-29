import { useEffect, useState } from "react";

import axios from 'axios';
import Product from "./product";

import "./product.css"

const Products = ({data, setData, addToBasket, setAddToBasket, setBasket}) => {
    

    const [error, setError] = useState(null);

    

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://b4ab526d9853a7ab.mokky.dev/product');
        setData(response.data);
        
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit =  () => {
    const newItem = data[addToBasket]
    setBasket(prevItem => [...prevItem, newItem])

}


  return (
        <div className="products">
           {
               data.map(item => <Product id={item.id} img={item.img} title={item.name} price={item.newprice} addToBasket={setAddToBasket} handleSubmit={handleSubmit}/>)
               
           }
        </div>
    )
}

export default Products