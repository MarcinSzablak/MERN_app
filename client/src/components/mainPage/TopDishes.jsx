import './TopDishes.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../serversConectionHelpers/serverFunctions';

function TopDishes() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
      fetchData(setProductsList, "http://localhost:8080/api/TopKebabs")
  },[]);

  return (
    <div className='top-dishes-main'>
        <h2>Poznaj nasze <b><i>Topowe Kebaby</i></b></h2>
        <div className='top-dishes-box'>
        {
          productsList.map( (product) =>{
            return(
              <div key={product.id} className='dish-box'>
                <div className='dish-box-text'>
                  <p>w czym: {product.wCzym}</p>
                  <p>mięso: {product.mieso}</p>
                  <p>sos: {product.sos}</p>
                  <p>rozmiar: {product.rozmiar}</p>
                  <p>cena: {product.cena}zł</p>
                </div>
                <img src={"http://localhost:8080/images/"+product.img} />
              </div>
            )
          })
        }
        </div>
    </div>
  )
}

export default TopDishes;